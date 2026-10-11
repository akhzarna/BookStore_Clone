export default function FlexDemo() {
  return (
    // STEP 1: The parent div stacks the header and main area vertically.
    <div className="flex flex-col gap-6 rounded-lg border border-slate-300 bg-white p-4">
      
      {/* STEP 2: flex puts the logo and navigation side by side.
          items-center aligns them vertically; justify-between separates them. */}
      <div className="flex flex-wrap items-center justify-between gap-4 bg-slate-600 p-6 text-white">
        
      <div className="flex flex-wrap gap-4 text-sm">
          <div>Dashboard</div>
          <div>Dashboard</div>
          <div>Dashboard</div>

        </div>

        <div className="flex flex-wrap gap-4 text-sm">
          <div>One</div>
          <div>Two</div>
          <div>Dashboard</div>
          <div>Pull requests</div>
          <div>Issues</div>
        </div>
      
      </div>

      {/* STEP 3: Stack on small screens; use a row from the md breakpoint.
          gap-6 adds space between the three child divs. */}
      
      
      <div className="flex flex-col gap-4 md:flex-row">
      
        {/* STEP 4: On medium screens, keep the left column at the viewport top.
            self-start prevents Flexbox from stretching it to the row's height.
            The other two columns scroll naturally with the page. */}
        <div className="flex flex-col gap-4 rounded-lg bg-slate-400 p-6 md:sticky md:top-0 md:max-h-screen md:w-1/4 md:shrink-0 md:self-start md:overflow-y-auto">
          
          <div className="text-lg font-bold">Top repositories</div>
          <div className="text-sm text-blue-700">student / hello-react</div>
          <div className="text-sm text-blue-700">student / flex-practice</div>
          <div className="text-sm text-blue-700">student / github-layout</div>
          <div className="text-sm text-blue-700">student / github-layout</div>
          <div className="text-sm text-blue-700">student / github-layout</div>
          <div className="text-sm text-blue-700">student / github-layout</div>
          <div className="text-sm text-blue-700">student / github-layout</div>




 <div className="text-lg font-bold">Top repositories</div>
          <div className="text-sm text-blue-700">student / hello-react</div>
          <div className="text-sm text-blue-700">student / flex-practice</div>
          <div className="text-sm text-blue-700">student / github-layout</div>
          <div className="text-sm text-blue-700">student / github-layout</div>
          <div className="text-sm text-blue-700">student / github-layout</div>
          <div className="text-sm text-blue-700">student / github-layout</div>
          <div className="text-sm text-blue-700">student / github-layout</div>


           <div className="text-lg font-bold">Top repositories</div>
          <div className="text-sm text-blue-700">student / hello-react</div>
          <div className="text-sm text-blue-700">student / flex-practice</div>
          <div className="text-sm text-blue-700">student / github-layout</div>
          <div className="text-sm text-blue-700">student / github-layout</div>
          <div className="text-sm text-blue-700">student / github-layout</div>
          <div className="text-sm text-blue-700">student / github-layout</div>
          <div className="text-sm text-blue-700">student / github-layout</div>
        </div>

        {/* flex-1 makes this column fill the remaining horizontal space. */}
        <div className="flex flex-1 flex-col gap-4 rounded-lg bg-blue-50 p-6">
          <div className="text-lg font-bold">Join GitHub Eductaion</div>
          
          <div className="flex flex-col gap-2 rounded-lg border border-blue-200 bg-white p-4">
            <div className="font-semibold">Welcome to your dashboard</div>
            <div className="text-sm text-slate-600">Build your first GitHub-style layout using div containers and Flexbox.</div>
          </div>
          
          <div className="flex flex-col gap-2 rounded-lg border border-blue-200 bg-white p-4">
            <div className="font-semibold">Your first repository</div>
            <div className="text-sm text-slate-600">hello-react · Practice ReactJS and Tailwind CSS</div>
          </div>

          <div className="flex flex-col gap-2 rounded-lg border border-blue-200 bg-white p-4">
            <div className="font-semibold">Your third repository</div>
            <div className="text-sm text-slate-600">hello-react · Practice ReactJS and Tailwind CSS</div>
          </div>


          <div className="flex flex-col gap-2 rounded-lg border border-blue-200 bg-white p-4">
            <div className="font-semibold">Welcome to your dashboard</div>
            <div className="text-sm text-slate-600">Build your first GitHub-style layout using div containers and Flexbox.</div>
          </div>
          
          <div className="flex flex-col gap-2 rounded-lg border border-blue-200 bg-white p-4">
            <div className="font-semibold">Your first repository</div>
            <div className="text-sm text-slate-600">hello-react · Practice ReactJS and Tailwind CSS</div>
          </div>

          <div className="flex flex-col gap-2 rounded-lg border border-blue-200 bg-white p-4">
            <div className="font-semibold">Your third repository</div>
            <div className="text-sm text-slate-600">hello-react · Practice ReactJS and Tailwind CSS</div>
          </div>



          <div className="flex flex-col gap-2 rounded-lg border border-blue-200 bg-white p-4">
            <div className="font-semibold">Welcome to your dashboard</div>
            <div className="text-sm text-slate-600">Build your first GitHub-style layout using div containers and Flexbox.</div>
          </div>
          
          <div className="flex flex-col gap-2 rounded-lg border border-blue-200 bg-white p-4">
            <div className="font-semibold">Your first repository</div>
            <div className="text-sm text-slate-600">hello-react · Practice ReactJS and Tailwind CSS</div>
          </div>

          <div className="flex flex-col gap-2 rounded-lg border border-blue-200 bg-white p-4">
            <div className="font-semibold">Your third repository</div>
            <div className="text-sm text-slate-600">hello-react · Practice ReactJS and Tailwind CSS</div>
          </div>
        
        </div>

        <div className="flex flex-col gap-4 rounded-lg bg-slate-100 p-6 md:w-1/4">
          <div className="text-lg font-bold">Latest activity</div>
          <div className="text-sm text-slate-600">You created hello-react.</div>
          <div className="text-sm text-slate-600">You started learning Flexbox.</div>
        </div>
      </div>

    </div>
  );
}
