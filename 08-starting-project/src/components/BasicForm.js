import useInput from "../Hooks/use-input";

const BasicForm = (props) => {
  const {
    hasError: nameHasError,
    isValid: nameIsValid,
    reset: resetNameForm,
    value: nameValue,
    valueBlurHandler: nameBlurHandler,
    valueChangeHandler: nameChangedHandler
  } = useInput(value => value.trim() !== '');

  const {
    hasError: lastNameHasError,
    isValid: lastNameIsValid,
    reset: resetLastNameForm,
    value: lastNameValue,
    valueBlurHandler: lastNameBlurHandler,
    valueChangeHandler: lastNameChangeHandler
  } = useInput(value => value.trim() !== '');

  const {
    hasError: emailHasError,
    isValid: emailIsValid,
    reset: resetEmailForm,
    value: emailValue,
    valueBlurHandler: emailBlurHandler,
    valueChangeHandler: emailChangeHandler
  } = useInput(value => value.trim().length > 8 && value.includes("@") && value.includes("."));


  const formSubmissionHandler = event =>{
    event.preventDefault();
    if (!isFormValid){
      return;
    }
    
    if (!nameIsValid){
      return;
    }

    if (!lastNameIsValid){
      return;
    }

    if (!emailIsValid){
      return;
    }

    console.log(nameValue + "\n" + lastNameValue + "\n" + emailValue);
    resetNameForm();
    resetLastNameForm();
    resetEmailForm();
  }

  const nameFormClass = nameHasError
    ? 'form-control invalid'
    : 'form-control';

  const lastNameFormClass = lastNameHasError
    ? 'form-control invalid'
    : 'form-control';

  const emailFormClass = emailHasError
    ? 'form-control invalid'
    : 'form-control';

    let isFormValid = false;
    isFormValid = nameIsValid && lastNameIsValid && emailIsValid;

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className='control-group'>
        <div className={nameFormClass}>
          <label htmlFor='name'>First Name</label>
          <input value={nameValue} onBlur={nameBlurHandler} onChange={nameChangedHandler} type='text' id='firstName' />
          {nameHasError && <p className="error-text">First name is invalid.</p>}
        </div>
        <div className={lastNameFormClass}>
          <label htmlFor='last name'>Last Name</label>
          <input value={lastNameValue} onChange={lastNameChangeHandler} onBlur={lastNameBlurHandler} type='text' id='lastName' />
          {lastNameHasError && <p className='error-text'>Last name is invalid.</p>}
        </div>
      </div>
      <div className={emailFormClass}>
        <label htmlFor='email'>E-Mail Address</label>
        <input value={emailValue} onChange={emailChangeHandler} onBlur={emailBlurHandler} type='email' id='email' />
        {emailHasError && <p className="error-text">Email is invalid.</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!isFormValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
