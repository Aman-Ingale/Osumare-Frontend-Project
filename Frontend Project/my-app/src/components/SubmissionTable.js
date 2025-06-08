import React from 'react';

const SubmissionTable = ({ submissions }) => (
  <section className="w-full py-10 bg-[#fafaff] px-4 md:px-8 flex flex-col items-center justify-center">
    <div className="max-w-5xl w-full mx-auto px-4 md:px-8 flex flex-col items-center justify-center">
      <div className="overflow-x-auto rounded-xl shadow w-full">
        <table className="min-w-full bg-white text-sm text-center mx-auto">
          <thead>
            <tr className="bg-gray-100 text-gray-700">
              <th className="px-4 py-3 text-left">First Name</th>
              <th className="px-4 py-3 text-left">Last Name</th>
              <th className="px-4 py-3 text-left">Gender</th>
              <th className="px-4 py-3 text-left">Languages</th>
              <th className="px-4 py-3 text-left">Email</th>
              <th className="px-4 py-3 text-left">Submitted At</th>
            </tr>
          </thead>
          <tbody>
            {submissions.length === 0 ? (
              <tr>
                <td colSpan="7" className="px-4 py-6 text-center text-gray-400">No submissions yet.</td>
              </tr>
            ) : (
              submissions.map((s, idx) => (
                <tr key={idx} className="border-t">
                  <td className="px-4 py-3">{s.firstName}</td>
                  <td className="px-4 py-3">{s.lastName}</td>
                  <td className="px-4 py-3">{s.gender}</td>
                  <td className="px-4 py-3">{Array.isArray(s.languages) ? s.languages.join(', ') : s.languages}</td>
                  <td className="px-4 py-3">{s.email}</td>
                  <td className="px-4 py-3">{new Date(s.submittedAt).toLocaleString()}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  </section>
);

export default SubmissionTable; 