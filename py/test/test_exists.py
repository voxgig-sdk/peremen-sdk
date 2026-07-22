# ProjectName SDK exists test

import pytest
from peremen_sdk import PeremenSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = PeremenSDK.test(None, None)
        assert testsdk is not None
