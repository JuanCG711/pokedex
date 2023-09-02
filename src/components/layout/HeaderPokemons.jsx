const HeaderPokemons = ({ children }) => {
  return (
    <section>
      <header>
        <div className="h-16 bg-[#DD1A1A]"></div>
        <div className="h-8 bg-[#0C0C0C] relative">
          <div className="absolute max-w-[70px] -top-5 right-0 -translate-x-[20px]">
            <img src="/images/image3.png" alt="" />
          </div>
          <div className="absolute max-w-[40px] -top-[6px] right-0 -translate-x-[35px]">
            <img className="top-4" src="/images/image4.png" alt="" />
          </div>
          <div>
            <img className="absolute max-w-[200px]  translate-x-[10px] -top-8" src="/images/image1.png" alt="" />
          </div>
        </div>
      </header>
      {children}
    </section>
  );
};
export default HeaderPokemons;
