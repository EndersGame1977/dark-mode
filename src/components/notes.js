
/*
create const to hold state
create function to change state
create logic to react to the change in state

set the state and then assign that state to another state so you can clear that state 
one state to take in data and another to store it


*/

const [takeIN, setTakeIN] = useState('');
const [storeIN, setStoreIN] = useState('');

const moveState = () => {
    setStoreIN(takeIN); //the storeIN now has state from takeIN
    setTakeIN(''); //can now clear the state in takeIN
}

const usePasswordValidator = () => {
    const [isValid, setIsValid] = useState(false);
}

const [password, setPassword] = useState('');

<input
    value={password}
    onChange={
        event => setPassword(event.target.value)
        event => validatePass(event.target.value)    
    }
/>

const validatePass = (pass) => {
    if(pass.legth > 7){ //logic to test length of argument
        setIsValid(true)
    }else{
        setIsValid(false)
    }
    return [isValid, validatePass]
}

const [validPass, validatePass] = usePasswordValidator();

{validPass ? password is valid : password is invalid} //logic to test and then choose what to display


localStorage.setItem('obj', JSON.stringify{name: 'dan'}) //can only save strings, need to convert using JSON.stringify{name: 'dan'}
localStorage.getItem()
localStorage.removeItem()

JSON.parse(localStorage.getItem('obj'));

to set in local Storage
localStorage.setItem(key, JSON.stringify(value))

const setValue = (value) => {
    localStorage.setItem(key, JSON.stringify(value))
    setStroedValue(value)
}