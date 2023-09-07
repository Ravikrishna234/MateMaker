import React, { useCallback, useEffect, useState } from 'react';
import classes from './SearchBar.module.css';
import { universitiesData } from '../contexts/USA_institutions.js'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function SearchBar(){
    const [usainstitutionData, setUSAinstitutionData] = useState([]);
    const [enteredName, setEnteredName] = useState('');
    const [showNameDropDown, setShowNameDropDown] = useState(false);
    const [enteredCity, setEnteredCity] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    const [enteredRoomPerson, setEnteredRoomPerson] = useState('');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    useEffect(()=> {
   	if(enteredName.length){
        setShowNameDropDown(true);
        let filteredUniversities = universitiesData.filter((universityName)=> {
        const nameWithoutSpaces = universityName['institution'].replace(/\s/g, '').toLowerCase();
        const enteredNameLower = enteredName.toLowerCase();
  
        return (
            universityName['institution'].toLowerCase().includes(enteredNameLower.toLowerCase()) ||
            nameWithoutSpaces.includes(enteredNameLower.toLowerCase())
            );
        });
        
        setUSAinstitutionData(filteredUniversities);
        setShowNameDropDown(filteredUniversities.length > 0);
    } else {
        setUSAinstitutionData([]);
        setShowNameDropDown(false);
    }
   },[enteredName, universitiesData]);


    const nameSelected = (name, event) => {
      // console.log(name);
    //   event.stopPropagation();
      setEnteredName(name);
      setShowNameDropDown(false);
    }
    const nameChangeHandler = (event) => {
        setEnteredName(event.target.value);
    }

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    }

    const dropdownRoomMateHandler = (event)=>{
        setEnteredRoomPerson(event.target.value);
    }

    const roomMateOptions = [
        {value: '', label: 'Preferred Roommate'},
        {value: '1', label: '1'},
        {value: '2', label: '2'},
        {value: '3', label: '3'},
        {value: '4', label: '4'},
        {value: '4+', label: '4+'}
    ]
    const submitHandler = (event) => {
        event.preventDefault();
    }
    return (
    <React.Fragment>
        <form onSubmit={submitHandler}>
            <div className={classes.searchContainer}>
               <div className={classes.searchBox}> 
                    <div className={classes.searchRow}>
                        <input 
                            type="text"
                            placeholder="Enter University Name"
                            value={enteredName}
                            onChange={nameChangeHandler} 
                            autoComplete='off' required/>
                    {/* <div className={classes.resultBox}> */}
                        {showNameDropDown && (
                            <ul>
                                {usainstitutionData.map((university, index) => (
                                    <li key={index} onClick={(event)=> nameSelected(university.institution, event)}>{university.institution}</li>
                                ))}
                            </ul>
                        )}
                    {/* </div> */}
                    </div>
                    </div>
               <div className={classes.searchDate}>
                <input 
                    type="date"
                    value={enteredDate}
                    onChange={dateChangeHandler} />
                </div>
                {/* Implementation 1 */}
                <div className={classes.searchRoomPerson}>
                <select
                    id="selectOption"
                    value={enteredRoomPerson}
                    onChange={dropdownRoomMateHandler}
                    className={classes.searchDropdown}>
                        <option value='' >Preferred Roommate</option>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='4'>4</option>
                        <option value='>4'>4+</option>

                </select>
                </div>
                <div className={classes.searchFieldButton}>
                <button type="submit" className={classes.searchButton}>
                    <FontAwesomeIcon className={classes.searchGlass} icon={faMagnifyingGlass}></FontAwesomeIcon>    
                </button>
                </div>
                {/* Implementation 2 */}
                {/* <div className={classes.dropDownContainer}>
                    <div 
                        className={classes.dropDownHeader}
                        onClick={()=> setIsDropdownOpen(!isDropdownOpen)}>
                        {enteredRoomPerson && roomMateOptions.find(opt => opt.value == enteredRoomPerson).label}
                    </div>
                    {isDropdownOpen && (
                        <ul className={classes.searchDropdown}>
                            {roomMateOptions.map((option)=> {
                                <li
                                    key={option.value}
                                    onClick={()=> dropdownRoomMateHandler(option.value)}
                                    className={`classes.dropDownOptions ${enteredRoomPerson === option.value }`}>
                                    {option.label}
                                </li>
                            })}
                        </ul>
                    )}
                </div> */}
            </div>
        </form>
    </React.Fragment>)
}

export default SearchBar;