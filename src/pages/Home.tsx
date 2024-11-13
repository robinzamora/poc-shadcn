import { Component } from '../components/Component';

function Home(): JSX.Element {
  return (
    <div className="home-container flex flex-col items-center justify-center min-h-screen p-4 dark">
      <h1 className="text-center text-2xl mb-8">POC shadcn</h1>
      <div className="w-[50rem]">
        <Component />
      </div>
    </div>
  );
}

export default Home;
