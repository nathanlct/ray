import gym
from gym.spaces import Discrete, Tuple
import numpy as np

from ray.rllib.examples.env.multi_agent import make_multiagent


class RandomEnv(gym.Env):
    """A randomly acting environment.

    Can be instantiated with arbitrary action-, observation-, and reward
    spaces. Observations and rewards are generated by simply sampling from the
    observation/reward spaces. The probability of a `done=True` can be
    configured as well.
    """

    def __init__(self, config):
        # Action space.
        self.action_space = config.get("action_space", Discrete(2))
        # Observation space from which to sample.
        self.observation_space = config.get("observation_space", Discrete(2))
        # Reward space from which to sample.
        self.reward_space = config.get(
            "reward_space",
            gym.spaces.Box(low=-1.0, high=1.0, shape=(), dtype=np.float32))
        # Chance that an episode ends at any step.
        self.p_done = config.get("p_done", 0.1)
        # A max episode length.
        self.max_episode_len = config.get("max_episode_len", None)
        # Whether to check action bounds.
        self.check_action_bounds = config.get("check_action_bounds", False)
        # Steps taken so far (after last reset).
        self.steps = 0

    def reset(self):
        self.steps = 0
        return self.observation_space.sample()

    def step(self, action):
        if self.check_action_bounds and not self.action_space.contains(action):
            raise ValueError("Illegal action for {}: {}".format(
                self.action_space, action))
        if (isinstance(self.action_space, Tuple)
                and len(action) != len(self.action_space.spaces)):
            raise ValueError("Illegal action for {}: {}".format(
                self.action_space, action))

        self.steps += 1
        done = False
        # We are done as per our max-episode-len.
        if self.max_episode_len is not None and \
                self.steps >= self.max_episode_len:
            done = True
        # Max not reached yet -> Sample done via p_done.
        elif self.p_done > 0.0:
            done = bool(
                np.random.choice(
                    [True, False], p=[self.p_done, 1.0 - self.p_done]))

        return self.observation_space.sample(), \
            float(self.reward_space.sample()), done, {}


# Multi-agent version of the RandomEnv.
RandomMultiAgentEnv = make_multiagent(lambda c: RandomEnv(c))
