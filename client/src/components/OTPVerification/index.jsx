import React, { useState, useRef, useEffect, useContext } from 'react';
import { Button } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import { MyContext } from '../../App';

const OTPVerification = () => {
  const { openAlertBox } = useContext(MyContext);
  const navigate = useNavigate();
  const location = useLocation();
  
  // Get email from navigation state (passed from forgot password)
  const email = location.state?.email || 'your email';
  
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [timer, setTimer] = useState(300); // 5 minutes in seconds
  const [isResendDisabled, setIsResendDisabled] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  
  // Refs for each input field
  const inputRefs = useRef([]);
  
  // Timer effect
  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer(prev => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else {
      setIsResendDisabled(false);
    }
  }, [timer]);

  // Format timer display
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const NewPasswordNavigate = useNavigate();

  // Handle OTP input change
  const handleInputChange = (index, value) => {
    // Only allow numbers
    if (!/^\d*$/.test(value)) return;
    
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    
    // Auto-focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  // Handle backspace
  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  // Handle paste
  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').replace(/\D/g, '');
    
    if (pastedData.length === 6) {
      const newOtp = pastedData.split('');
      setOtp(newOtp);
      inputRefs.current[5]?.focus();
    }
  };

  // Verify OTP
  const handleVerifyOTP = async () => {
    const otpString = otp.join('');
    
    if (otpString.length !== 6) {
      openAlertBox('Please enter complete 6-digit OTP');
      return;
    }

    setIsLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      // For demo purposes, accept any 6-digit OTP
      // In real app, you'd make an API call here
      if (otpString === '123456' || otpString.length === 6) {
        openAlertBox('OTP verified successfully!');
        // Navigate based on the context (forgot password, registration, etc.)

        setTimeout(() => {
          navigate('/forgot-password'); // or wherever you want to redirect
        }, 1000);
      } else {
        openAlertBox('Invalid OTP. Please try again.');
      }
    } catch (error) {
      openAlertBox('Verification failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  // Resend OTP
  const handleResendOTP = async () => {
    setIsResendDisabled(true);
    setTimer(300); // Reset timer to 5 minutes
    setOtp(['', '', '', '', '', '']); // Clear current OTP
    
    try {
      // Simulate API call for resend
      await new Promise(resolve => setTimeout(resolve, 1000));
      openAlertBox('New OTP sent to your email!');
      inputRefs.current[0]?.focus();
    } catch (error) {
      openAlertBox('Failed to resend OTP. Please try again.');
      setIsResendDisabled(false);
    }
  };

  // Auto-focus first input on mount
  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  return (
    <section className="section py-20">
      <div className="container">
        <div className="card shadow-lg rounded-lg m-auto w-[500px] bg-white py-8 px-10">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Verify Your Email</h2>
            <p className="text-gray-600 text-sm">
              We've sent a 6-digit verification code to<br />
              <span className="font-semibold text-gray-800">{email}</span>
            </p>
          </div>

          {/* OTP Input Fields */}
          <div className="mb-6">
            <div className="flex justify-center gap-3 mb-4">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  ref={el => inputRefs.current[index] = el}
                  type="text"
                  maxLength="1"
                  value={digit}
                  onChange={(e) => handleInputChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  onPaste={handlePaste}
                  className="w-12 h-12 text-center text-xl font-semibold border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                  disabled={isLoading}
                />
              ))}
            </div>
          </div>

          {/* Timer */}
          <div className="text-center mb-6">
            {timer > 0 ? (
              <p className="text-sm text-gray-600">
                Time remaining: <span className="font-semibold text-red-500">{formatTime(timer)}</span>
              </p>
            ) : (
              <p className="text-sm text-red-500 font-semibold">OTP expired!</p>
            )}
          </div>

          {/* Verify Button */}
          <Button
            onClick={handleVerifyOTP}
            disabled={isLoading || otp.join('').length !== 6}
            className={`btn-org btn-lg w-full mb-4 ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {isLoading ? (
              <div className="flex items-center justify-center gap-2">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Verifying...
              </div>
            ) : (
              'Verify OTP'
            )}
          </Button>

          {/* Resend OTP */}
          <div className="text-center">
            <p className="text-sm text-gray-600 mb-2">Didn't receive the code?</p>
            <button
              onClick={handleResendOTP}
              disabled={isResendDisabled}
              className={`text-sm font-semibold ${
                isResendDisabled 
                  ? 'text-gray-400 cursor-not-allowed' 
                  : 'text-blue-600 hover:text-blue-700 cursor-pointer'
              } transition-colors`}
            >
              {isResendDisabled ? 'Resend OTP' : 'Resend OTP'}
            </button>
          </div>

          {/* Back to Login */}
          <div className="text-center mt-6 pt-4 border-t border-gray-200">
            <button
              onClick={() => navigate('/login')}
              className="text-sm text-gray-600 hover:text-gray-800 transition-colors"
            >
              ← Back to Login
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OTPVerification;