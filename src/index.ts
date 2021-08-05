import {html, css, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import { createWallet, KinClient, KinTest, Wallet } from '@kin-sdk/client'

@customElement('my-counter')
export class SimpleGreeting extends LitElement {
  
  static styles = css` 
      button {
        padding: 2rem 4rem;
        border: none;
        border-radius: 10px;
        font-size: 2rem;
        background-color: #6f41e8;
        color: white;
      }`;

  @property() public wallet = createWallet('create')
  readonly client = new KinClient(KinTest)
  
  render() {
    return html`
      <button @click="${this.generate}">Generate</button>
      <div>
        <code>Secret ${this.wallet.secret}</code>
      </div>
      <div>
        <code>PublicKey ${this.wallet.publicKey}</code>
      </div>
      
    `;
  }

  generate() {
    this.wallet = createWallet('create')
  }


}
