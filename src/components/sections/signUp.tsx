import React from 'react'

const SignUp = () => {
  return (
    <section>
        <div className="w-[785px] h-[405px] relative bg-zinc-950 rounded-[10.91px] border border-orange-600">
    <div className="left-[49.27px] top-[36.11px] absolute justify-start items-center gap-[75.91px] inline-flex">
        <div><span className="text-neutral-500 text-[29.09px] font-light font-['Vinila Test']">Ready to become,<br/></span><span className="text-orange-600 text-[43.37px] font-bold font-['Vinila Test']">Leaders of Today!</span></div>
        <div className="flex-col justify-start items-start gap-[11.42px] inline-flex">
            <input type="text" className="w-[252.73px] p-[7.52px] bg-neutral-800 rounded-[3.01px] border border-neutral-500 justify-start items-center gap-[7.52px] inline-flex cursor-pointer hover:border-orange-600 text-neutral-100 text-xs font-light font-['Vinila Test']" placeholder='Full Name'/>

            <input type="email" className="w-[252.73px] p-[7.52px] bg-neutral-800 rounded-[3.01px] border border-neutral-500 justify-start items-center gap-[7.52px] inline-flex cursor-pointer hover:border-orange-600 text-neutral-100 text-xs font-light font-['Vinila Test']" placeholder='Email'/>

            <input type="text" className="w-[252.73px] p-[7.52px] bg-neutral-800 rounded-[3.01px] border border-neutral-500 justify-start items-center gap-[7.52px] inline-flex cursor-pointer hover:border-orange-600 text-neutral-100 text-xs font-light font-['Vinila Test']" placeholder='Username'/>

            <input type="password" className="w-[252.73px] p-[7.52px] bg-neutral-800 rounded-[3.01px] border border-neutral-500 justify-start items-center gap-[7.52px] inline-flex cursor-pointer hover:border-orange-600 text-neutral-100 text-xs font-light font-['Vinila Test']" placeholder='Password'/>

            <input type="password" className="w-[252.73px] p-[7.52px] bg-neutral-800 rounded-[3.01px] border border-neutral-500 justify-start items-center gap-[7.52px] inline-flex cursor-pointer hover:border-orange-600 text-neutral-100 text-xs font-light font-['Vinila Test']" placeholder='Confirm Password'/>
            
            <button className="w-[252.73px] p-[7.52px] bg-orange-600 rounded-[3.01px] border border-red-300 justify-center items-center gap-[7.52px] inline-flex">
                <div className="text-white text-xs font-bold font-['Vinila Test']">Sign Up</div>
            </button>
            <div className="self-stretch text-center text-neutral-500 text-[10.53px] font-light font-['Vinila Test']">or continue with</div>
            <button className="w-[252.73px] p-[7.52px] bg-neutral-800 rounded-[3.01px] border border-neutral-500 justify-center items-center gap-[7.52px] inline-flex">
                <div className="w-[18.05px] h-[18.05px] relative" />
                <div className="text-neutral-500 text-xs font-light font-['Vinila Test']">Google Account</div>
            </button>
            <div><span className="text-neutral-500 text-[10.53px] font-light font-['Vinila Test']">Already have a account? </span><span className="text-orange-600 text-[10.53px] font-bold font-['Vinila Test']"><a href=''>Login</a></span></div>
        </div>
    </div>
</div>
    </section>
  )
}

export default SignUp
