# frozen_string_literal: true

# Typed models for the Peremen SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# Authentication entity data model.
#
# @!attribute [rw] email
#   @return [String, nil]
#
# @!attribute [rw] message
#   @return [String, nil]
#
# @!attribute [rw] success
#   @return [Boolean, nil]
Authentication = Struct.new(
  :email,
  :message,
  :success,
  keyword_init: true
)

# Request payload for Authentication#create.
#
# @!attribute [rw] email
#   @return [String, nil]
#
# @!attribute [rw] message
#   @return [String, nil]
#
# @!attribute [rw] success
#   @return [Boolean, nil]
AuthenticationCreateData = Struct.new(
  :email,
  :message,
  :success,
  keyword_init: true
)

