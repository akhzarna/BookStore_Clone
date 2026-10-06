export default function Register() {
  function handleSubmit(event) {
    event.preventDefault(); // Stop the page from reloading.

    const dictObj = {
      name: event.currentTarget.elements.namedItem("name").value,
      email: event.currentTarget.elements.namedItem("email").value,
      username: event.currentTarget.elements.namedItem("username").value,
      password: event.currentTarget.elements.namedItem("password").value,
      confirmPassword: event.currentTarget.elements.namedItem("confirmPassword").value,
      phone: event.currentTarget.elements.namedItem("phone").value,
      address: event.currentTarget.elements.namedItem("address").value
    };
    console.log("dictObj == ",dictObj["name"]);
    // alert("Submit button clicked!");
    
    if (dictObj["password"] !== dictObj["confirmPassword"]) {
      alert("Passwords do not match!");
      return;
    }
    // Yeh nahin Chalay ga
 
  }


  return (
    <div className="flex min-h-[75vh] w-full items-center justify-center rounded-3xl bg-gradient-to-br from-indigo-100 via-slate-50 to-violet-100 px-4 py-10 sm:px-8">
    <section className="w-full max-w-2xl overflow-hidden rounded-3xl border border-white bg-white shadow-2xl shadow-indigo-200/60">
      <div className="bg-gradient-to-r from-indigo-600 to-violet-600 px-6 py-8 text-center text-white">
        <span className="inline-flex rounded-full border border-white/30 bg-white/10 px-4 py-1 text-xs font-semibold tracking-widest">BOOK STORE</span>
      <h2 className="mt-4 text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">Create your account</h2>
      <p className="mt-3 text-center text-sm text-indigo-100">Join our Book Store and discover your next read.</p>
      
      </div>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5 p-6 sm:grid-cols-2 sm:p-8">
        
        <div>
          
          <label htmlFor="name" className="mb-2 block text-sm font-semibold text-slate-700">Name</label>
          
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter your name"
            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-indigo-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-200"
          />
          </div>

        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-semibold text-slate-700">Email</label>
          
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email"
            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-indigo-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-200"
          />
        </div>

  <div>
          <label htmlFor="username" className="mb-2 block text-sm font-semibold text-slate-700">User Name</label>
          <input
            id="username"
            name="username"
            type="text"
            placeholder="Enter your User Name"
            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-indigo-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-200"
          />
        </div>

        <div>
          <label htmlFor="password" className="mb-2 block text-sm font-semibold text-slate-700">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Enter your password"
            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-indigo-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-200"
          />
        </div>

         <div>
          <label htmlFor="confirmPassword" className="mb-2 block text-sm font-semibold text-slate-700">Confirm Password</label>
          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            placeholder="Confirm your password"
            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-indigo-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-200"
          />
        </div>


        <div>
          <label htmlFor="phone" className="mb-2 block text-sm font-semibold text-slate-700">Phone Number</label>
          <input
            id="phone"
            name="phone"
            type="number"
            placeholder="Enter your phone number"
            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-indigo-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-200"
          />
        </div>


        <div className="sm:col-span-2">
          <label htmlFor="address" className="mb-2 block text-sm font-semibold text-slate-700">Address</label>
          <input
            id="address"
            name="address"
            type="text"
            placeholder="Enter your address"

            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-indigo-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-200"
          />
        </div>
        

        <button
          type="submit"
          className="mt-2 cursor-pointer rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 px-4 py-3.5 font-semibold text-white shadow-lg shadow-indigo-200 transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:col-span-2"
        >
          Register
        </button>
      </form>
    </section>
    </div>
  );
}
