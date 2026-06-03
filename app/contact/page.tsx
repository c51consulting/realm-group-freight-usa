'use client';

import React, { useState } from 'react';
import { APP_NAME } from '@/lib/constants';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-4">Contact {APP_NAME}</h1>
      <p className="text-gray-600 mb-8">
        Have a question about the marketplace, your account, or an order? Send us a message and our team will get back to you, usually within one business day.
      </p>

      <div className="grid sm:grid-cols-3 gap-4 mb-10 text-sm">
        <div className="rounded-lg border border-gray-200 p-4">
          <div className="font-semibold text-gray-900 mb-1">General &amp; Sales</div>
          <a className="text-brand-600" href="mailto:hello@realmgroup.global">hello@realmgroup.global</a>
        </div>
        <div className="rounded-lg border border-gray-200 p-4">
          <div className="font-semibold text-gray-900 mb-1">Trust &amp; Safety</div>
          <a className="text-brand-600" href="mailto:trust@realmgroup.global">trust@realmgroup.global</a>
        </div>
        <div className="rounded-lg border border-gray-200 p-4">
          <div className="font-semibold text-gray-900 mb-1">Privacy &amp; Legal</div>
          <a className="text-brand-600" href="mailto:privacy@realmgroup.global">privacy@realmgroup.global</a>
        </div>
      </div>

      {submitted ? (
        <div className="rounded-md bg-green-50 p-4 text-green-800">
          Thanks for reaching out. We will reply to your email shortly.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
            />
          </div>
          <button
            type="submit"
            className="inline-flex items-center rounded-md bg-brand-600 px-4 py-2 text-white font-medium hover:bg-brand-700"
          >
            Send message
          </button>
        </form>
      )}

      <div className="mt-12 text-sm text-gray-500 border-t pt-6">
        <p>
          REALM Group Global · Operating {APP_NAME} for the US market.
          <br />
          Registered Australian parent entity. US operations delivered via Delaware LLC.
        </p>
      </div>
    </div>
  );
}
