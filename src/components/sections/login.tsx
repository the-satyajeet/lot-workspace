import React from 'react'

const Login = () => {
  return (
    <section>
        <div className="w-[1200px] h-[619.11px] relative bg-zinc-950 rounded-2xl border border-orange-600">
        <img src="/images/signup-logo.png" alt="lot logo" className="m-[12rem] ml-[14rem]"/>
    <div className="left-[706.66px] top-[92.70px] absolute flex-col justify-start items-start gap-[44.47px] inline-flex">
        <div><span className="text-neutral-500 text-[27.79px] font-light font-['Vinila Test']">Welcome back,</span><span className="text-orange-600 text-[27.79px] font-bold font-['Vinila Test']"> Leader!</span></div>
        <div className="flex-col justify-start items-start gap-[17.46px] flex">
            <div className="w-[386.33px] p-[11.50px] bg-neutral-800 rounded border border-neutral-500 justify-start items-center gap-[11.50px] inline-flex">
                <div className="text-neutral-500 text-lg font-light font-['Vinila Test']">example@email.com</div>
            </div>
            <div className="w-[386.33px] p-[11.50px] bg-neutral-800 rounded border border-neutral-500 justify-start items-center gap-[11.50px] inline-flex">
                <div className="text-neutral-500 text-lg font-light font-['Vinila Test']">Password</div>
            </div>
            <div className="w-[384.72px] justify-between items-center inline-flex">
                <div className="justify-center items-center gap-[7.27px] flex">
                    <div className="w-[27.60px] h-[27.60px] bg-neutral-800 rounded border border-neutral-500"></div>
                    <div className="text-neutral-500 text-base font-light font-['Vinila Test']">Remember me</div>
                </div>
                <div className="text-white text-base font-normal font-['Vinila Test']">Forgot Password?</div>
            </div>
            <div className="w-[386.33px] p-[11.50px] bg-orange-600 rounded border border-red-300 justify-center items-center gap-[11.50px] inline-flex">
                <div className="text-white text-lg font-bold font-['Vinila Test']">Login</div>
            </div>
            <div className="self-stretch text-center text-neutral-500 text-base font-light font-['Vinila Test']">or continue with</div>
            <div className="w-[386.33px] p-[11.50px] bg-neutral-800 rounded border border-neutral-500 justify-center items-center gap-[11.50px] inline-flex">
                <div className="w-[27.60px] h-[27.60px] relative"></div>
                <div className="text-neutral-500 text-lg font-light font-['Vinila Test']">Google Account</div>
            </div>
            <div><span className="text-neutral-500 text-base font-light font-['Vinila Test']">Don't have an account? </span><span className="text-orange-600 text-base font-bold font-['Vinila Test']">Sign Up</span></div>
        </div>
    </div>
</div>
    </section>
  )
}

export default Login
