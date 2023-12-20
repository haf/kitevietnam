
export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <div className="absolute z-10 top-0 right-0 m-8">
        <h1 className="text-9xl font-bold text-white">
          Kite Vietnam
        </h1>
      </div>

      <div className="absolute z-10 bottom-0 left-0 m-8 w-1/3">
        <img src="/logo.webp" alt="Logo" className="w-full" />
      </div>

      <div className="w-full h-screen">
        <video className="object-cover w-full h-full" autoPlay loop muted>
          <source src="/hero.mp4" type="video/mp4" />
        </video>
      </div>

      <h1 className="text-8xl text-center py-16">Contact us</h1>

      <div>
        <h2>Contact details</h2>
        <p>
          +84 33 33 23 350
        </p>
      
        <p>or</p>
      </div>

      <form className="flex flex-col items-center w-1/2 my-8">
        <input className="p-2 mb-4 w-full" type="text" placeholder="Name" />
        <input className="p-2 mb-4 w-full" type="email" placeholder="Email" />
        <textarea className="p-2 mb-4 w-full" placeholder="Message"></textarea>
        <button className="p-2 w-full bg-blue-500 text-white" type="submit">Submit</button>
      </form>

      <div className="w-full h-[512px]">
        <iframe
          className="w-full h-[512px]"
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d19055.699597528033!2d108.18328353821292!3d10.945869447257468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTDCsDU2JzQ1LjEiTiAxMDjCsDEyJzA2LjIiRQ!5e1!3m2!1sen!2s!4v1703055191305!5m2!1sen!2s" 
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade">
        </iframe>
      </div>

      <footer className="w-full h-20 flex items-center justify-center border-t bg-blue-100">
        <p className="text-center">Footer Content</p>
      </footer>
    </main>
  );
}