import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-10 text-gray-700">
      <div className="max-w-6xl mx-auto  grid grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-semibold">Support</h3>
          <ul className="mt-2 space-y-1">
            <li>Help Centre</li>
            <li>AirCover</li>
            <li>Combating discrimination</li>
            <li>Supporting people with disabilities</li>
            <li>Cancellation options</li>
            <li>Report neighbourhood concern</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Hosting</h3>
          <ul className="mt-2 space-y-1">
            <li>Local home</li>
            <li>Cover for hosts</li>
            <li>Hosting resources</li>
            <li>Community forum</li>
            <li>Hosting responsibly</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Localhost</h3>
          <ul className="mt-2 space-y-1">
            <li>Newsroom</li>
            <li>New Features</li>
            <li>Careers</li>
            <li>Investres</li>
            <li>Gift cards</li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-8 text-sm flex justify-between items-center mx-auto px-38">
        <p>© 2023 Localhost, Inc. All Rights Reserved</p>
        <div className="flex space-x-4">
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Terms & Conditions</a>
          <a href="#" className="hover:underline text-purple-600 font-medium">Contact us</a>
        </div>
      </div>
    </footer>
  );
}
