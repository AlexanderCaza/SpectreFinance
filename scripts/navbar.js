class Navbar extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <nav>
            <ul>
                <div class="dropdown">
                    <button onclick="myFunction()" class="dropbtn">Articles</button>
                    <div id="myDropdown" class="dropdown-content">
                        <a href="https://spectrefinance.org/pages/articles/the-recession-is-actually-good.html">The Recession is Actually Good. Here's Why.</a>
                    </div>
                </div>
                <div class="dropdown">
                    <button onclick="myFunction()" class="dropbtn">Company Analysis</button>
                    <div id="myDropdown" class="dropdown-content">
                        <a href="#">Coming Soon</a>
                    </div>
                </div>
                <div class="dropdown">
                    <button onclick="myFunction()" class="dropbtn">Monthly Stock Picks</button>
                    <div id="myDropdown" class="dropdown-content">
                        <a href="https://spectrefinance.org/pages/monthly-picks/february2023.html">February 2023</a>
                        <a href="https://spectrefinance.org/pages/monthly-picks/january2023.html">January 2023</a>
                    </div>
                </div>
            </ul>
        </nav>
      `;
    }
  }
  
  customElements.define('nav-component', Navbar);
