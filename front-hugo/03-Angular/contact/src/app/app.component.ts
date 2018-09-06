/**
 *  Pour déclarer une class comme composant de notre application, on import,
 *  "Component" via @angular/core.
 */
import { Component } from '@angular/core';
import {Contact} from './shared/models/contact';
/**
* @Component est ce qu'on appel un décorateur.
* Il va nous permettre de définir 3 paramètres
* essentiels à notre application...
*/

@Component({
  /**
   * Le sélector détermine la manière dont le composant sera affiché
   * dans notre HTML : <app-root></app-root>;
   * Vous devez OBLIGATORY avoir la balise d'ouverture et de fermeture
   */
  
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

/**
 * La class contien les données du composant mais aussi, sont comportement (Ce qu'il fait).
 */
export class AppComponent {
  // -- Déclaration d'une variable
  title = 'Gestion de Contactes';

  contactActif: Contact;

  // -- Déclaration d'un objet
  unContact: Contact = {
    id: 1,
    name: 'elies Kedim',
    username: 'Kedim Elies',
    email: 'elieskedim1@gmail.com'
  };

  mesContacts: Contact[] = [
    {
      id: 1,
      name: 'Elies KEDIM',
      username: 'Kedim Elies',
      email: 'elieskedim1@gmail.com'
    },
    {
      id: 2,
      name: 'Luc JOINVIL',
      username: 'luc joinvil',
      email: 'luc.joinvil@lepoles.com'
    },
    {
      id: 3,
      name: 'Hugo LIEGARD',
      username: 'hugo liegard',
      email: 'hugo.liegard@gmail.com'
    },
    {
      id: 4,
      name: 'Layla LAHCENE',
      username: 'layla lahcene',
      email: 'laylaµ.lahvene@lepoles.org'
    }
  ];


  sowContact(contactcliquer: Contact) {
    this.contactActif = contactcliquer;
  }
}
