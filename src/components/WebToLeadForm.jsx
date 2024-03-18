import React, { useEffect } from 'react';
import './WebToLeadForm.css'; // Importer le fichier CSS

function WebToLeadForm() {
    useEffect(() => {
        const metaTag = document.createElement('meta');
        metaTag.setAttribute('http-equiv', 'Content-type');
        metaTag.setAttribute('content', 'text/html; charset=UTF-8');
        document.head.appendChild(metaTag);

        // Nettoyer la balise <META> lors du démontage du composant
        return () => {
            document.head.removeChild(metaTag);
        };
    }, []); // Utilisez un tableau vide pour exécuter cet effet uniquement une fois lors du montage initial

    return (
        <div className="web-to-lead-form"> {/* Appliquer la classe CSS au conteneur du formulaire */}
            <form action="https://test.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8&orgId=00D9O000000Yv3t" method="POST">
                <input type="hidden" name="oid" value="00D9O000000Yv3t" />
                <input type="hidden" name="retURL" value="http://www.google.com" />
                
                <label htmlFor="first_name">First Name</label>
                <input id="first_name" maxLength="40" name="first_name" size="20" type="text" /><br />
                
                <label htmlFor="last_name">Last Name</label>
                <input id="last_name" maxLength="80" name="last_name" size="20" type="text" /><br />
                
                <label htmlFor="email">Email</label>
                <input id="email" maxLength="80" name="email" size="20" type="text" /><br />
                
                <label htmlFor="phone">Phone</label>
                <input id="phone" maxLength="40" name="phone" size="20" type="text" /><br />
                
                LinkedIn Account:
                <input id="00N7Q000008xY06" maxLength="255" name="00N7Q000008xY06" size="20" type="text" /><br />
                
                <input type="submit" name="submit" />
            </form>
        </div>
    );
}

export default WebToLeadForm;


