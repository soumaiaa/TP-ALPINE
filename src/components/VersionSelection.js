import React, { useState } from 'react';
import imagePure from '../assets/images/configurateur/modele/selection/pure.png'; // Importez l'image pour la version Pure
import imageLegende from '../assets/images/configurateur/modele/selection/legende.png'; // Importez l'image pour la version Legende
import '../styles/versionSelection.css'; // Importez le fichier CSS pour le style
// VersionSelection.js
import { Link } from 'react-router-dom';

function VersionSelection() {
    const versions = [
        { name: 'Pure', price: 54700, image: imagePure },
        { name: 'Legende', price: 58500, image: imageLegende },
    ];

    const [selectedVersion, setSelectedVersion] = useState(null);



    const handleNextStep = () => {
        // Validez les sélections et redirigez vers la page de configuration avec la version sélectionnée
        if (selectedVersion) {
            window.location.href = `/configurator?version=${selectedVersion.name.toLowerCase()}`;
        }
    };
    // Ajoutez une fonction pour passer la version sélectionnée au parent
    const handleVersionSelect = (version) => {
        setSelectedVersion(version);

    };
    return (
        <div className="version-selection-container">
            <h2>Sélection de la version de la voiture :</h2>
            <div className="version-list">
                {versions.map((version, index) => (
                    <div key={index} className={`version-item ${selectedVersion === version ? 'selected' : ''}`} onClick={() => handleVersionSelect(version)}>
                        <h3>{version.name}</h3>
                        <img src={version.image} alt={version.name} />
                        <p>Prix de base: {version.price} €</p>
                    </div>
                ))}
            </div>
            {selectedVersion && (
                <div className="selected-version">
                    <h2>Version sélectionnée :</h2>
                    <h3>{selectedVersion.name}</h3>
                    <img src={selectedVersion.image} alt={selectedVersion.name} />
                    <p>Prix de base: {selectedVersion.price} €</p>
                    {selectedVersion && selectedVersion.name && selectedVersion.price && (
                        <Link to={`/configurator?version=${selectedVersion.name.toLowerCase()}&price=${selectedVersion.price}`}>
                            <button className="custom-button">Construire votre voiture</button>
                        </Link>
                    )}

                </div>
            )}

        </div>
    );
}

export default VersionSelection;
