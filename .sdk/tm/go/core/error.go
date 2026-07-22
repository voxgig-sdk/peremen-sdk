package core

type PeremenError struct {
	IsPeremenError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewPeremenError(code string, msg string, ctx *Context) *PeremenError {
	return &PeremenError{
		IsPeremenError: true,
		Sdk:              "Peremen",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *PeremenError) Error() string {
	return e.Msg
}
