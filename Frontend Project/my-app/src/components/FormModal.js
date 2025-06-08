import React, { useState, useEffect, useRef } from 'react';

const validate = (values) => {
  const errors = {};
  if (!values.firstName) errors.firstName = 'First name is required.';
  if (!values.lastName) errors.lastName = 'Last name is required.';
  if (!values.gender) errors.gender = 'Gender is required.';
  if (!values.languages.length) errors.languages = 'Select at least one language.';
  if (!values.email) errors.email = 'Email is required.';
  else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(values.email)) errors.email = 'Invalid email address.';
  if (!values.terms) errors.terms = 'You must agree to the terms.';
  return errors; 
};

const LANGUAGES = ['English', 'Hindi', 'Marathi'];

const FormModal = ({ open, onClose, onSubmit }) => {
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    gender: '',
    languages: [],
    email: '',
    terms: false,
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const modalRef = useRef();

  useEffect(() => {
    if (open) {
      setValues({ firstName: '', lastName: '', gender: '', languages: [], email: '', terms: false });
      setErrors({});
      setTouched({});
    }
  }, [open]);

  useEffect(() => {
    const handleEsc = (e) => { if (e.key === 'Escape') onClose(); };
    if (open) document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [open, onClose]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name === 'languages') {
      setValues((prev) =>
        checked
          ? { ...prev, languages: [...prev.languages, value] }
          : { ...prev, languages: prev.languages.filter((l) => l !== value) }
      );
    } else if (name === 'terms') {
      setValues((prev) => ({ ...prev, terms: checked }));
    } else if (type === 'radio') {
      setValues((prev) => ({ ...prev, [name]: value }));
    } else {
      setValues((prev) => ({ ...prev, [name]: value }));
    }
  };
  const handleBlur = (e) => {
    setTouched({ ...touched, [e.target.name]: true });
    setErrors(validate({ ...values, [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate(values);
    setErrors(errs);
    setTouched({ firstName: true, lastName: true, gender: true, languages: true, email: true, terms: true });
    if (Object.keys(errs).length === 0) {
      onSubmit({ ...values, submittedAt: new Date().toISOString() });
    }
  };
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
      <div ref={modalRef} className="bg-white rounded-xl shadow-2xl w-full max-w-xl p-8 relative animate-fadeIn">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-2xl" aria-label="Close">&times;</button>
        <h3 className="text-2xl font-bold mb-1">Get Started Today!</h3>
        <p className="text-gray-600 mb-6 text-base">Fill in your details and take control of your tasks.</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-sm font-bold mb-1">First Name</label>
              <input name="firstName" value={values.firstName} onChange={handleChange} onBlur={handleBlur} placeholder="Enter your first name" className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 text-sm bg-[#ffe9ec] ${errors.firstName && touched.firstName ? 'border-red-500 focus:ring-red-200' : 'border-gray-200 focus:ring-primary'}`} />
              {errors.firstName && touched.firstName && <div className="text-xs text-red-500 mt-1">{errors.firstName}</div>}
            </div>
            <div className="flex-1">
              <label className="block text-sm font-bold mb-1">Last Name</label>
              <input name="lastName" value={values.lastName} onChange={handleChange} onBlur={handleBlur} placeholder="Enter your last name" className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 text-sm bg-[#ffe9ec] ${errors.lastName && touched.lastName ? 'border-red-500 focus:ring-red-200' : 'border-gray-200 focus:ring-primary'}`} />
              {errors.lastName && touched.lastName && <div className="text-xs text-red-500 mt-1">{errors.lastName}</div>}
            </div>
          </div>
          <div>
            <label className="block text-sm font-bold mb-1">Gender</label>
            <div className="flex gap-4">
              <label className={`flex items-center px-4 py-2 rounded border cursor-pointer ${values.gender === 'Male' ? 'bg-[#ffe9ec] border-primary' : 'bg-[#f9f9f9] border-gray-200'}`}>
                <input type="radio" name="gender" value="Male" checked={values.gender === 'Male'} onChange={handleChange} onBlur={handleBlur} className="mr-2 accent-primary" />
                Male
              </label>
              <label className={`flex items-center px-4 py-2 rounded border cursor-pointer ${values.gender === 'Female' ? 'bg-[#ffe9ec] border-primary' : 'bg-[#f9f9f9] border-gray-200'}`}>
                <input type="radio" name="gender" value="Female" checked={values.gender === 'Female'} onChange={handleChange} onBlur={handleBlur} className="mr-2 accent-primary" />
                Female
              </label>
            </div>
            {errors.gender && touched.gender && <div className="text-xs text-red-500 mt-1">{errors.gender}</div>}
          </div>
          <div>
            <label className="block text-sm font-bold mb-1">Language</label>
            <div className="flex flex-col gap-2">
              {LANGUAGES.map((lang) => (
                <label key={lang} className={`flex items-center px-4 py-2 rounded border cursor-pointer ${values.languages.includes(lang) ? 'bg-[#ffe9ec] border-primary' : 'bg-[#f9f9f9] border-gray-200'}`}>
                  <input type="checkbox" name="languages" value={lang} checked={values.languages.includes(lang)} onChange={handleChange} onBlur={handleBlur} className="mr-2 accent-primary" />
                  {lang}
                </label>
              ))}
            </div>
            {errors.languages && touched.languages && <div className="text-xs text-red-500 mt-1">{errors.languages}</div>}
          </div>
          <div>
            <label className="block text-sm font-bold mb-1">Email Address</label>
            <input name="email" value={values.email} onChange={handleChange} onBlur={handleBlur} placeholder="Enter your email address" className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 text-sm bg-[#ffe9ec] ${errors.email && touched.email ? 'border-red-500 focus:ring-red-200' : 'border-gray-200 focus:ring-primary'}`} />
            {errors.email && touched.email && <div className="text-xs text-red-500 mt-1">{errors.email}</div>}
          </div>
          <div className="flex items-center mt-2">
            <input type="checkbox" name="terms" checked={values.terms} onChange={handleChange} onBlur={handleBlur} className="mr-2 accent-primary" />
            <span className="text-sm">I agree to the <span className="text-primary font-medium cursor-pointer">terms and conditions</span></span>
          </div>
          {errors.terms && touched.terms && <div className="text-xs text-red-500 mt-1">{errors.terms}</div>}
          <button type="submit" className="w-full py-3 bg-primary text-white rounded font-semibold text-lg shadow hover:bg-primary-dark transition mt-2">Done</button>
        </form>
      </div>
    </div>
  );
};

export default FormModal; 