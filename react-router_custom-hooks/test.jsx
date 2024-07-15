import React, { useState } from 'react';
import axios from 'axios';
import Image from './components/Image';
import Stats from './components/Stats';
import './App.css';

const App = () => {
    const [characterName, setCharacterName] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [stats, setStats] = useState({});

    const token = '8f2df434e5193118eb2bbea9eab8884d';

    const handleChange = (event) => {
        setCharacterName(event.target.value);
    };

    const handleClick = async (event) => {
        event.preventDefault();
        if (characterName.trim() === '') {
            console.error('Character name is required');
            return;
        }
        try {
            const response = await axios.get(https://cors-proxy-superhero-api.onrender.com/${token}/getByName/${characterName.trim()});
                console.log('API response:', response.data); // Debug line to check API response
            if (response.data.length > 0) {
                const data = response.data[0];
                setImageUrl(data.image.url);
                setStats(data.powerstats);
            } else {
                console.error('Superhero not found');
            }
        } catch (error) {
            console.error('Error fetching superhero data', error);
        }
    };

    const handleRandomClick = async () => {
        const randomId = Math.floor(Math.random() * 731) + 1;
        try {
            const response = await axios.get(https://cors-proxy-superhero-api.onrender.com/${token}/getById/${randomId});
      const data = response.data;
            setImageUrl(data.image.url);
            setStats(data.powerstats);
        } catch (error) {
            console.error('Error fetching random superhero data', error);
        }
    };

    return (
        <div className="App">
            <form onSubmit={handleClick}>
                <input
                    type="text"
                    value={characterName}
                    onChange={handleChange}
                    placeholder="Enter superhero name"
                />
                <button type="submit">Search</button>
            </form>
            <button onClick={handleRandomClick}>Random Superhero</button>
            {imageUrl && <Image url={imageUrl} />}
            {Object.keys(stats).length > 0 && <Stats stats={stats} />}
        </div>
    );
};

export default App;