import { useState } from 'react';
import Input from './Input.jsx';

export default function ArtistInput() {
  const [addCoHead, setAddCoHead] = useState(false);
  // const [addArtistsList, setAddArtistsList] = useState([]);
  // const [addingArtist, setAddingArtist] = useState(false);

  const showAddCoHandler = () => {
    setAddCoHead(true);
  };

  const closeAddCoHandler = () => {
    setAddCoHead(false);
  };

  // const handleChange = (index, event) => {
  //   let newArtistList = [...addArtistsList];
  //   newArtistList[index][event.target.artist] = event.target.value;
  //   setAddArtistsList(newArtistList);
  //   console.log(addArtistsList);
  // };

  // const addArtistFieldHandler = (event) => {
  //   event.preventDefault();
  //   if (addArtistsList.length < 3) {
  //     setAddingArtist(true);
  //     setAddArtistsList([...addArtistsList, { Artist: '' }]);
  //   } else {
  //     setAddingArtist(false);
  //   }
  // };

  // const removeArtistFieldHandler = (event, index) => {
  //   event.preventDefault();
  //   console.log(index);
  //   let newArtistList = [...addArtistsList];
  //   console.log(newArtistList);
  //   newArtistList.splice(index, 1);
  //   console.log(newArtistList);
  //   setAddArtistsList(newArtistList);
  // };

  const showAddCoButton = (
    <button className="ml-3 block font-medium cursor-pointer bg-transparent hover:bg-gray-600 text-white font-semibold py-1.5 px-3 border border-white hover:border-transparent" onClick={showAddCoHandler}>
      Add Co-Headliner
    </button>
    // <label className="ml-3 block font-medium text-slate-800" htmlFor="addCo">
    //   Add Co-Headliner{' '}
    //   <input type="checkbox" id="addCo" onClick={showAddCoHandler} />
    // </label>
  );

  const showCoInput = (
    <div>
      <Input label="Co-Headliner" type="text" id="coHeadliner" name="coHeadliner" />
      <button className="ml-3 block font-medium cursor-pointer bg-transparent hover:bg-gray-600 text-white font-semibold py-1.5 px-3 border border-white hover:border-transparent" onClick={closeAddCoHandler}>
        Remove Co-Headliner
      </button>
    </div>
  );

  // const showAddArtistInput = addArtistsList.map((index) => (
  //   <div key={index}>
  //     <Input
  //       label={`Artist #${index + 1}`}
  //       type="text"
  //       id={`artist${index + 1}`}
  //       name={`artist${index + 1}`}
  //       // onChange={(e) => handleChange(index, e)}
  //     />
  //     <button className="ml-3 block font-medium cursor-pointer bg-transparent hover:bg-gray-600 text-white font-semibold py-1 px-3 border border-white hover:border-transparent" onClick={() => removeArtistFieldHandler(index)}>
  //       Remove Artist
  //     </button>
  //   </div>
  // ));

  return (
    <div className="flex-col w-80">
      <Input label="Headliner" type="text" id="headliner" name="headliner" required />
      {!addCoHead && showAddCoButton}
      {addCoHead && showCoInput}
      {/* {(addingArtist) && showAddArtistInput} */}
      {/* {addArtistsList.length < 3 && <button
        className="m-3 block font-medium cursor-pointer bg-transparent hover:bg-gray-600 text-white font-semibold py-1 px-3 border border-white hover:border-transparent"
        onClick={addArtistFieldHandler}
      >
        Add Artist
      </button>} */}
    </div>
  );
}
