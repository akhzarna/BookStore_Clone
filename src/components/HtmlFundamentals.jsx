export default function HtmlFundamentals() {
  return (
    <main className="flex max-w-3xl flex-col gap-8 bg-white p-4! md:p-8!">
      <h1 className="text-2xl font-bold">HTML + Tailwind Basics</h1>

      {/* DIV is block by default. SPAN is inline by default. */}
      <section className="flex flex-col gap-3">
        <h2 className="text-xl font-bold">1. Div vs Span</h2>
        <p>A div starts on a new line and fills the available width.</p>
        <div className="bg-blue-100 p-2!">First div</div>
        <div className="bg-blue-100 p-2!">Second div</div>

        <p>A span stays in the same line and takes only the space it needs.</p>
        <p>
          I like <span className="bg-yellow-200">HTML</span> and{' '}
          <span className="bg-yellow-200">Tailwind</span>.
        </p>
        <p className="text-sm">These are their defaults. CSS can change either one.</p>
      </section>

      {/* FLEX arranges items along a row or column. GRID uses rows and columns. */}
      <section className="flex flex-col gap-3">
        <h2 className="text-xl font-bold">2. Flex vs Grid</h2>
        <p>Flex: arrange items in one direction — a row or a column.</p>
        <code>flex gap-2</code>
        
        <div className="flex flex-row gap-2">
          <div className="bg-green-100 p-3!">A</div>
          <div className="bg-green-100 p-3!">B</div>
          <div className="bg-green-100 p-3!">C</div>
          <div className="bg-green-100 p-3!">D</div>
        </div>

        <p>Grid: arrange items in rows and columns.</p>
        <code>grid grid-cols-2 gap-2</code>
        
        <div className="grid grid-cols-2 gap-2">
          <div className="bg-purple-100 p-3!">A</div>
          <div className="bg-purple-100 p-3!">B</div>
          <div className="bg-purple-100 p-3!">C</div>
          <div className="bg-purple-100 p-3!">D</div>
        </div>

      </section>

      {/* Base classes apply everywhere; prefixes apply from a minimum screen width. */}
      <section className="flex flex-col gap-3">
        <h2 className="text-xl font-bold">3. Responsive Tailwind Classes</h2>
        <p>Resize the browser to see these boxes change columns.</p>
        <code className="break-words">grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2</code>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
          <div className="bg-orange-100 p-3!">Book 1</div>
          <div className="bg-orange-100 p-3!">Book 2</div>
          <div className="bg-orange-100 p-3!">Book 3</div>
        </div>
        <p>Default: 1 column. From 640px: 2 columns. From 1024px: 3 columns.</p>
        <p>Prefixes: sm: 640px · md: 768px · lg: 1024px · xl: 1280px · 2xl: 1536px.</p>
        <p>These are class prefixes, not HTML tags. Each applies at that width and above.</p>
      </section>

      {/* Use Grid for a book shelf: every row shares the same column widths. */}
      <section className="flex flex-col gap-3">
        <h2 className="text-xl font-bold">4. When to Choose Grid</h2>
        <p>A book shelf needs equal columns, with books aligned across rows.</p>
        <code>grid grid-cols-2 gap-2</code>
        <div className="grid grid-cols-2 gap-2">
          <div className="bg-blue-100 p-3!">HTML Book</div>
          <div className="bg-blue-100 p-3!">CSS Book</div>
          <div className="bg-blue-100 p-3!">JavaScript Book</div>
          <div className="bg-blue-100 p-3!">React Book</div>
        </div>
        <p>Grid keeps columns aligned across rows. With wrapping Flex, each row arranges its items independently.</p>
      </section>
    </main>
  );
}
