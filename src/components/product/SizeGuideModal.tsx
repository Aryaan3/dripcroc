import React from 'react';
import { X, Ruler } from 'lucide-react';

interface SizeGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SizeGuideModal: React.FC<SizeGuideModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="relative min-h-screen flex items-center justify-center p-4">
        <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl overflow-hidden z-10 border border-gray-200 p-6 sm:p-8 space-y-6">
          
          <div className="flex justify-between items-center border-b border-gray-100 pb-4">
            <div className="flex items-center gap-2 text-drip-charcoal">
              <Ruler size={22} className="text-drip-orange" />
              <h3 className="text-lg font-black uppercase font-display tracking-tight">
                DripCroc Oversized Fit Guide
              </h3>
            </div>
            <button 
              onClick={onClose}
              className="p-1 text-gray-400 hover:text-drip-charcoal rounded-full hover:bg-gray-100"
            >
              <X size={20} />
            </button>
          </div>

          <p className="text-xs text-gray-600">
            DripCroc tees are intentionally cut with a drop-shoulder, relaxed oversized fit. If you prefer a regular fitted look, order <strong>one size down</strong>.
          </p>

          {/* Size Chart Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left">
              <thead className="bg-drip-charcoal text-white font-extrabold uppercase text-[10px]">
                <tr>
                  <th className="py-2.5 px-3 rounded-l">Size</th>
                  <th className="py-2.5 px-3">Chest (Inches)</th>
                  <th className="py-2.5 px-3">Length (Inches)</th>
                  <th className="py-2.5 px-3 rounded-r">Shoulder (Inches)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 font-semibold text-drip-charcoal">
                <tr className="hover:bg-drip-gray-surface">
                  <td className="py-3 px-3 font-extrabold text-drip-orange">S</td>
                  <td className="py-3 px-3">42"</td>
                  <td className="py-3 px-3">28"</td>
                  <td className="py-3 px-3">21"</td>
                </tr>
                <tr className="hover:bg-drip-gray-surface">
                  <td className="py-3 px-3 font-extrabold text-drip-orange">M</td>
                  <td className="py-3 px-3">44"</td>
                  <td className="py-3 px-3">29"</td>
                  <td className="py-3 px-3">22"</td>
                </tr>
                <tr className="hover:bg-drip-gray-surface">
                  <td className="py-3 px-3 font-extrabold text-drip-orange">L</td>
                  <td className="py-3 px-3">46"</td>
                  <td className="py-3 px-3">30"</td>
                  <td className="py-3 px-3">23"</td>
                </tr>
                <tr className="hover:bg-drip-gray-surface">
                  <td className="py-3 px-3 font-extrabold text-drip-orange">XL</td>
                  <td className="py-3 px-3">48"</td>
                  <td className="py-3 px-3">31"</td>
                  <td className="py-3 px-3">24"</td>
                </tr>
                <tr className="hover:bg-drip-gray-surface">
                  <td className="py-3 px-3 font-extrabold text-drip-orange">XXL</td>
                  <td className="py-3 px-3">50"</td>
                  <td className="py-3 px-3">32"</td>
                  <td className="py-3 px-3">25"</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-drip-orange/10 p-3 rounded-lg border border-drip-orange/20 text-[11px] text-drip-charcoal font-semibold">
            💡 <strong>Model Measurement:</strong> Model is 6'0" (183cm), 76kg and wearing Size L for an oversized drop silhouette.
          </div>

        </div>
      </div>
    </div>
  );
};
