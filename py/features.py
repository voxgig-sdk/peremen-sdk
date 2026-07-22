# Peremen SDK feature factory

from feature.base_feature import PeremenBaseFeature
from feature.test_feature import PeremenTestFeature


def _make_feature(name):
    features = {
        "base": lambda: PeremenBaseFeature(),
        "test": lambda: PeremenTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
