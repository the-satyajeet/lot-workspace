import React from 'react'

const Login = () => {
  return (
    <section>
        <div className="w-[785px] h-[405px] relative bg-zinc-950 rounded-[10.91px] border border-orange-600">
        <img src="/images/signup-logo.png" alt="lot logo" className="m-[4rem] ml-[10rem]"/>
    <div className="left-[462.27px] top-[57.36px] absolute flex-col justify-start items-start gap-[29.09px] inline-flex">
        
        <div><span className="text-neutral-500 text-lg font-light font-['Vinila Test']">Welcome back,</span><span className="text-orange-600 text-lg font-bold font-['Vinila Test']"> Leader!</span></div>
        <div className="flex-col justify-start items-start gap-[11.42px] flex">
            <div className="w-[252.73px] p-[7.52px] bg-neutral-800 rounded-[3.01px] border border-neutral-500 justify-start items-center gap-[7.52px] inline-flex">
                <div className="text-neutral-500 text-xs font-light font-['Vinila Test']">example@email.com</div>
            </div>
            <div className="w-[252.73px] p-[7.52px] bg-neutral-800 rounded-[3.01px] border border-neutral-500 justify-start items-center gap-[7.52px] inline-flex">
                <div className="text-neutral-500 text-xs font-light font-['Vinila Test']">Password</div>
            </div>
            <div className="w-[251.67px] justify-between items-center inline-flex">
                <div className="justify-center items-center gap-[4.76px] flex">
                    <div className="w-[18.05px] h-[18.05px] bg-neutral-800 rounded-[3.01px] border border-neutral-500" />
                    <div className="text-neutral-500 text-[10.53px] font-light font-['Vinila Test']">Remember me</div>
                </div>
                <div className="text-white text-[10.53px] font-normal font-['Vinila Test']">Forgot Password?</div>
            </div>
            <div className="w-[252.73px] p-[7.52px] bg-orange-600 rounded-[3.01px] border border-red-300 justify-center items-center gap-[7.52px] inline-flex">
                <div className="text-white text-xs font-bold font-['Vinila Test']">Login</div>
            </div>
            <div className="self-stretch text-center text-neutral-500 text-[10.53px] font-light font-['Vinila Test']">or continue with</div>
            <div className="w-[252.73px] p-[7.52px] bg-neutral-800 rounded-[3.01px] border border-neutral-500 justify-center items-center gap-[7.52px] inline-flex">
                <div className="w-[18.05px] h-[18.05px] relative" />
                <div className="text-neutral-500 text-xs font-light font-['Vinila Test']">Google Account</div>
            </div>
            <div><span className="text-neutral-500 text-[10.53px] font-light font-['Vinila Test']">Don't have an account? </span><span className="text-orange-600 text-[10.53px] font-bold font-['Vinila Test']">Sign Up</span></div>
        </div>
    </div>
</div>
    </section>
  )
}

export default Login