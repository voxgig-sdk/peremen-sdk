# Peremen SDK utility: make_context

from core.context import PeremenContext


def make_context_util(ctxmap, basectx):
    return PeremenContext(ctxmap, basectx)
