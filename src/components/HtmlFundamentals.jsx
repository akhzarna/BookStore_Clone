import './HtmlFundamentals.css';

// index.html contains DOCTYPE, html, head and body.
// This component renders real HTML elements inside that document.
export default function HtmlFundamentals() {
  return (
    <main className="html-demo">
      <header>
        <h1>Book Store — HTML Tags Demo</h1>
        <p>Open this component to see the tags behind these elements.</p>
      </header>

      <hr />

      {/* Headings and paragraphs */}
      <section>
        <h2>Headings and paragraphs</h2>
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <h4>Heading 4</h4>
        <h5>Heading 5</h5>
        <h6>Heading 6</h6>
        <p>This is a paragraph about our book store.</p>
        <p>This is another paragraph.<br />This sentence starts on a new line.</p>
      </section>

      <hr />

      {/* Actual unordered and ordered lists */}
      <section>
        <h2>Unordered list — ul</h2>
        <ul>
          <li>HTML Book</li>
          <li>CSS Book</li>
          <li>JavaScript Book</li>
        </ul>

        <h2>Ordered list — ol</h2>
        <ol>
          <li>Choose a book.</li>
          <li>Add it to your cart.</li>
          <li>Place your order.</li>
        </ol>

        <h2>Description list — dl</h2>
        <dl>
          <dt>HTML</dt>
          <dd>Structures a web page.</dd>
          <dt>CSS</dt>
          <dd>Styles a web page.</dd>
        </dl>
      </section>

      <hr />

      <section>

        <h2>Text formatting</h2>

        <p><strong>Important text</strong> and <em>emphasized text</em>.</p>
        <p><b>Bold text</b> and <i>italic text</i>.</p>
        
        <p>
        <mark> Highlighted text </mark> and <small>small print</small>.</p>
        
        <p>Old price: 
          
          <del> Rs. 900 </del> New price: 
          
          <ins>Rs. 700</ins></p>
        
        <p>Water: H<sub>2</sub>O. Square: x<sup>2</sup>.</p>
        <p><abbr title="HyperText Markup Language">HTML</abbr> uses tags such as <code>&lt;p&gt;</code>.</p>
        <blockquote>Reading a little every day builds a habit.</blockquote>
      </section>

      <hr />

      <section>
        <h2>Links — a</h2>
        <nav aria-label="Demo links">
         
          <p> <a href="https://example.com">Absolute link: example.com</a></p>
         
          <p> <a href="/BookCard"> Relative link: our books </a></p>
  
          
          <p><a href="#demo-footer">Jump to the footer</a></p>
        </nav>
      </section>

      <hr />

      <section>
        <h2>Image — img</h2>
        <figure>
          <img src="/book-placeholder.svg" alt="Sample book cover" width="120" height="180" />
          <figcaption>A sample book cover.</figcaption>
        </figure>
      </section>

      <hr />

      <section>
        <h2>Table — table</h2>
        <table>
          <caption>Book prices</caption>
          <thead>
            <tr>
              <th scope="col">Book</th>
              <th scope="col">Price</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>HTML Book</td><td>Rs. 700</td></tr>
            <tr><td>CSS Book</td><td>Rs. 800</td></tr>
          </tbody>
        </table>
      </section>

      <hr />

      <section>
        <h2>HTML5 elements</h2>
        <article>
          <h3>Book review — article</h3>
          <p>Learn HTML is a helpful book for beginners.</p>
        </article>
        <aside><p>Reading tip — aside: practice every day.</p></aside>
        <details>
          <summary>Click to open — details and summary</summary>
          <p>You have opened the hidden text!</p>
        </details>
        <p>Published: <time dateTime="2026-10-12">12 October 2026</time></p>
      </section>

      <hr />

      <section>
        <h2>Inputs and attributes</h2>
        <form onSubmit={(event) => event.preventDefault()}>
          <p>
            <label htmlFor="demo-email">Email: </label>
            <input id="demo-email" name="email" type="email" placeholder="name@example.com" required />
          </p>
          <p>
            <label htmlFor="demo-count">Books (1–10): </label>
            <input id="demo-count" name="count" type="number" min="1" max="10" defaultValue="1" />
          </p>
          <p>
            <label htmlFor="demo-date">Reading date: </label>
            <input id="demo-date" name="date" type="date" />
          </p>
          <button type="submit">Try browser validation</button>
        </form>
        <small>Demo only: submitting checks the fields and sends no data.</small>
      </section>

      <hr />

      <section>
        <h2>Audio and video</h2>
        {/* Files in public/media are served at /media. */}
        <p>Audio: a dinosaur roar.</p>
        <audio src="/media/t-rex-roar.mp3" controls preload="metadata" aria-label="Dinosaur roar audio demo">
          <a href="/media/t-rex-roar.mp3">Download audio</a>
        </audio>
        <p>Video: flowers moving in the breeze (silent).</p>
        <video src="/media/flower.mp4" controls preload="metadata" width="320" aria-label="Flowers video demo">
          <a href="/media/flower.mp4">Download video</a>
        </video>
        <p><small>Press Play to start each example.</small></p>
      </section>

      <hr />

      <footer id="demo-footer">
        <p>Book Store footer — footer</p>
        <a href="https://validator.w3.org/nu/">Validate your HTML</a>
      </footer>
    </main>
  );
}
