import React, { useState, useEffect, useRef } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import './login.css'

const LogIn = () => {
    const navigate = useNavigate();
    const emailRef = useRef();
    const passwordRef = useRef();

    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
    }
    return (
      <>
      <div className="logo">
          <div className="logo-svg">
          <svg width="100" height="100" viewBox="0 0 630 514" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 454.31C9 451.81 271 175.31 180 34.3104C89 -106.69 303 512.81 365.5 438.81C428 364.81 422.5 -34.1896 456.5 5.8104C490.5 45.8104 544 518.31 629 511.31" stroke="#FF6884" strokeWidth="20"/>
          </svg>
      </div>
  
          <div className="logo-text">
              <h1>ini Archive</h1>
          </div>
  
      </div>
  
      {/* SVG */}
      <svg className="signup-svg" width="424" height="591" viewBox="0 0 424 591" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clipPath="url(#clip0_6_546)">
  <path d="M65.7802 131.56C102.11 131.56 131.56 102.11 131.56 65.7802C131.56 29.4508 102.11 0 65.7802 0C29.4508 0 0 29.4508 0 65.7802C0 102.11 29.4508 131.56 65.7802 131.56Z" fill="#FF6584"/>
  <path d="M257.263 147.776L260 135.832C259.532 134.59 260.032 133.166 261.234 132.521C263.351 129.007 266.487 127.364 270.593 127.497C271.69 126.908 273.006 127.167 273.819 128.035C275.766 125.466 278.52 124.092 281.926 123.683C281.652 122.526 282.164 121.286 283.261 120.697C285.419 117.413 288.726 116.015 292.62 115.673C293.928 114.971 295.558 115.462 296.261 116.771L296.787 117.75L306.263 121.776L305.442 123.193L297.568 119.258C299.319 123.068 297.833 127.629 294.089 129.639C290.196 131.729 285.346 130.267 283.256 126.374L282.311 124.612L274.381 128.868L275.327 130.631C277.416 134.524 275.954 139.373 272.062 141.463C268.169 143.553 263.319 142.091 261.229 138.198L260.812 137.421L259.533 147.836L257.263 147.776V147.776Z" fill="#3F3D56"/>
  <path d="M222.392 572.817C220.326 572.947 219.185 570.38 220.748 568.884L220.903 568.266C220.883 568.216 220.862 568.167 220.841 568.118C218.752 563.136 211.672 563.17 209.6 568.159C207.761 572.587 205.421 577.023 204.844 581.705C204.586 583.772 204.702 585.878 205.161 587.906C200.853 578.495 198.586 568.219 198.586 557.885C198.586 555.288 198.728 552.692 199.018 550.102C199.257 547.983 199.587 545.878 200.013 543.792C202.319 532.514 207.312 521.773 214.513 512.802C217.975 510.91 220.862 507.951 222.606 504.405C223.233 503.127 223.724 501.751 223.956 500.349C223.562 500.401 222.47 494.401 222.768 494.032C222.219 493.199 221.236 492.785 220.636 491.972C217.654 487.929 213.545 488.635 211.4 494.129C206.818 496.442 206.773 500.277 209.585 503.966C211.374 506.313 211.62 509.489 213.189 512.001C213.028 512.208 212.86 512.408 212.698 512.615C209.737 516.413 207.176 520.495 205.017 524.783C205.627 520.017 204.727 514.275 203.191 510.574C201.443 506.356 198.166 502.805 195.28 499.159C191.814 494.779 184.707 496.691 184.096 502.242C184.09 502.296 184.085 502.349 184.079 502.403C184.508 502.645 184.927 502.902 185.338 503.173C187.677 504.72 186.869 508.347 184.097 508.775L184.034 508.785C184.189 510.328 184.454 511.859 184.841 513.364C181.139 527.68 189.131 532.894 200.543 533.128C200.795 533.257 201.04 533.386 201.292 533.509C200.136 536.764 199.212 540.104 198.527 543.488C197.914 546.478 197.488 549.501 197.249 552.537C196.951 556.367 196.977 560.216 197.3 564.04L197.281 563.904C196.461 559.693 194.174 555.76 190.854 553.034C185.909 548.972 178.922 547.476 173.586 544.21C171.018 542.638 167.727 544.669 168.175 547.647L168.197 547.79C168.991 548.113 169.766 548.487 170.515 548.907C170.944 549.149 171.364 549.406 171.774 549.677C174.114 551.224 173.305 554.851 170.533 555.279L170.47 555.288C170.425 555.295 170.386 555.301 170.341 555.308C171.704 558.544 173.603 561.547 175.98 564.137C178.294 576.634 188.236 577.82 198.87 574.181H198.876C200.039 579.244 201.738 584.192 203.921 588.907H221.941C222.005 588.707 222.064 588.5 222.122 588.3C220.455 588.403 218.776 588.306 217.135 588.003C218.472 586.362 219.809 584.708 221.146 583.068C221.179 583.036 221.205 583.003 221.23 582.971C221.909 582.131 222.593 581.298 223.271 580.459L223.272 580.458C223.314 577.88 223.005 575.311 222.393 572.818L222.392 572.817V572.817Z" fill="#F2F2F2"/>
  <path d="M293.414 162.529L304.319 175.615L298.503 133.45L296.346 134.528C294.098 135.653 292.662 137.935 292.621 140.449L293.414 162.529V162.529Z" fill="#2F2E41"/>
  <path d="M271.466 517.552L278.474 530.907L278.487 530.943L280.814 535.388L284.561 542.521L284.564 542.53L286.137 545.535L288.482 550.004L294.41 547.751L296.177 547.071L297.106 546.72L295.537 542.598L291.389 531.66L284.189 512.718L284.109 512.747L282.339 513.418L275.271 516.106L273.501 516.777L271.466 517.552Z" fill="#FFB6B6"/>
  <path d="M274.89 571.119C275.708 573.249 278.089 574.319 280.212 573.513L283.042 572.434L284.813 571.763L291.884 569.083L293.663 568.409L297.36 567.001L297.987 559.767L299.498 562.232L299.501 562.241L301.465 565.439L302.501 565.05L307.933 562.984L297.842 541.878L295.537 542.598L294.696 542.858L292.887 543.422L286.146 545.532L286.137 545.535L285.667 545.683L283.859 546.246L283.109 546.483L285.46 552.657L280.585 559.728L279.254 561.659L275.353 567.318C274.586 568.435 274.409 569.854 274.89 571.119V571.119Z" fill="#2F2E41"/>
  <path d="M343.676 532.85L345.795 547.782V547.82L346.496 552.788L347.631 560.765V560.774L348.104 564.134L348.814 569.13L355.154 568.997L357.046 568.95L358.04 568.931L357.945 564.522L357.709 552.826L357.283 532.566H357.198L355.305 532.604L347.745 532.765L345.852 532.803L343.676 532.85Z" fill="#FFB6B6"/>
  <path d="M328.923 584.459C328.98 586.74 330.863 588.547 333.134 588.5L336.162 588.434L338.055 588.396L345.616 588.245L347.518 588.207L351.473 588.121L354.492 581.516L355.088 584.346V584.355L355.864 588.027L356.971 588.008L362.781 587.885L360.358 564.616L357.945 564.522L357.065 564.484L355.173 564.408L348.114 564.134H348.104L347.612 564.115L345.72 564.039L344.934 564.011L345.076 570.615L338.112 575.64L336.21 577.012L330.636 581.034C329.538 581.829 328.895 583.106 328.923 584.459V584.459Z" fill="#2F2E41"/>
  <path d="M365.722 336.512L358.969 296.551L373.461 290.721L376.49 334.907C377.847 335.736 378.989 336.951 379.722 338.495C381.731 342.722 379.933 347.778 375.705 349.787C371.477 351.796 366.421 349.998 364.412 345.77C362.909 342.607 363.538 338.98 365.722 336.512V336.512Z" fill="#FFB6B6"/>
  <path d="M253.92 159.019L227.613 189.848L213.84 182.479L245.776 151.793C245.541 150.22 245.739 148.564 246.452 147.011C248.404 142.757 253.435 140.89 257.69 142.842C261.944 144.794 263.81 149.825 261.858 154.08C260.398 157.263 257.213 159.109 253.919 159.019L253.92 159.019Z" fill="#FFB6B6"/>
  <path d="M312.006 174.69C324.035 174.69 333.787 164.939 333.787 152.909C333.787 140.88 324.035 131.128 312.006 131.128C299.977 131.128 290.225 140.88 290.225 152.909C290.225 164.939 299.977 174.69 312.006 174.69Z" fill="#FFB6B6"/>
  <path d="M281.972 291.075L340.668 284.663L342.849 294.841V297.28L344.102 298.734L344.56 300.56L345.757 300.657C345.757 300.657 345.061 301.891 345.56 302.56C345.946 303.077 347.439 302.899 348.047 303.786C354.212 312.774 370.183 340.166 362.478 373.356L363.568 428.243L362.56 432.56L363.726 435.363L364.56 439.56L365.749 526.387L368.657 536.565L364.295 549.65L338.124 551.104L333.762 534.384L335.943 513.301L329.4 451.507L327.56 448.56L328.616 445.56L329.56 441.56L327.544 437.426L320.396 383.187C318.534 378.835 317.763 374.094 318.151 369.377L318.314 367.387L317.041 357.726L281.782 415.155L270.011 435.54L271.241 444.237L279.011 493.54L290.011 505.54L292.011 521.54L276.011 531.54L258.011 525.54V513.54L230.56 438.56L261.79 346.094L266.879 341.732L266.152 335.916L270.955 331.113L280.56 309.56L284.972 300.075L281.972 291.075L281.972 291.075Z" fill="#2F2E41"/>
  <path d="M301.774 175.979H324.909L330.127 191.972L362.841 207.239L355.571 241.408L346.848 271.214L344.277 273.784L345.394 278.484H339.747L340.668 284.663L346.848 293.751L280.358 292.327V277.497L285.56 256.56V256.56C278.992 242.11 282.656 233.408 283.56 217.56L277.784 195.607L295.958 193.83L301.774 175.979V175.979Z" fill="#394DF0"/>
  <path d="M286.707 217.821L291.796 205.462C291.796 205.462 291.069 196.738 275.802 194.557C260.535 192.376 231.551 190.195 231.551 190.195L238.56 182.56L241.56 174.56L227.56 167.56L219.534 171.506L216.56 176.56L217.56 178.56L213.219 181.195C207.814 189.793 210.125 201.121 218.465 206.916H218.465L221.708 210.159L226.462 212.732L232.278 212.005L286.707 217.821V217.821Z" fill="#394DF0"/>
  <path d="M345.757 210.147L358.116 205.058C358.116 205.058 366.84 205.785 369.021 221.052C371.202 236.319 373.383 276.303 373.383 276.303L377.018 284.3V286.535L380.232 293.387L378.3 295.319L383.56 299.567L359.57 308.29L354.408 295.096L356.662 289.389L353.419 286.146L350.846 281.392L351.573 275.576L345.757 210.147V210.147Z" fill="#394DF0"/>
  <path d="M353.393 197.556H347.433C345.443 194.856 345.093 193.076 345.263 189.776C344.983 192.006 340.243 185.186 340.513 187.766C340.573 188.326 343.463 198.016 343.563 198.556C340.794 201.086 337.583 202.416 334.063 202.876C335.183 199.486 334.044 197.656 330.593 197.956C330.773 199.676 330.544 201.436 329.973 203.066C319.553 202.716 306.973 196.646 294.544 191.886C294.093 188.756 294.643 185.476 296.173 182.706C294.893 184.846 293.643 186.996 292.743 189.316C292.544 189.836 292.363 190.366 292.203 190.896C292.093 191.276 291.993 191.656 291.903 192.026L286.143 192.336C291.033 185.266 290.143 175.356 296.093 170.026C305.563 161.556 297.573 149.226 293.613 137.736C293.493 134.756 295.323 132.036 298.133 131.026L305.823 128.266C315.603 124.756 315.113 122.746 324.563 128.556C334.013 125.656 350.563 141.086 350.563 152.556C350.563 153.556 350.683 154.526 350.873 155.456C349.763 155.596 348.683 155.956 347.723 156.536C349.033 157.276 350.313 158.076 351.544 158.946C352.503 164.846 352.433 170.866 351.063 176.706C349.523 183.276 352.323 194.426 353.393 197.556V197.556Z" fill="#2F2E41"/>
  <path d="M423.944 588.96C423.944 589.62 423.414 590.15 422.754 590.15H169.464C168.804 590.15 168.274 589.62 168.274 588.96C168.274 588.3 168.804 587.77 169.464 587.77H422.754C423.414 587.77 423.944 588.3 423.944 588.96V588.96Z" fill="#CCCCCC"/>
  </g>
  <defs>
  <clipPath id="clip0_6_546">
  <rect width="423.944" height="590.15" fill="white"/>
  </clipPath>
  </defs>
  </svg>
  
      {/* Form */}
      <div className="form login-form">
      <h1 className="form-h1">Log In</h1>
  
      <form onSubmit={handleSubmit} className="intro-form">
  
          <div className="intro-form-item">
          <input className="form-input" type="email" id="email" placeholder=' ' ref={emailRef}/>
          <label htmlFor="email">Email</label>
          </div>
  
          <div className="intro-form-item">
          <input className="form-input" type="password" id="password" placeholder=' ' ref={passwordRef}/>
          <label htmlFor="password">Password</label>
          </div>
  
          <div className="form-container">
          <button className="btn-full">Log In</button>
          </div>
      </form>
      </div>
  
      <div className="info">
        <p className="info-p">Log in with <span className="pink-span">Mini Media</span> to start enhancing your social presence</p>
        <p className="info-p">Connect with loved ones, keep track of all the latest trends and <span className="blue-span">Events near you!</span></p>
    </div>
  
      <p className="text-center already">Forgot password? <span className="blue-span">reset password</span></p>
      <p className="text-center already">Need an account? <Link to="/signup" className="blue-span">Sign Up</Link></p>

      {error && <h2 className="error-message">{error}</h2>}
      </>
    )
  }

export default LogIn