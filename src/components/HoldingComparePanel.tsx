import React from 'react';
import { useShallow } from 'zustand/shallow';
import { useHoldingStore } from '../stores/useHoldingStore';
import type { Holding } from '../types/stock.types';

const panelStyles: Record<string, React.CSSProperties> = {
  container: {
    position: 'fixed', bottom: 0, left: 0, right: 0,
    background: '#fff', borderTop: '2px solid #1E40AF',
    padding: '16px 24px', zIndex: 1000,
    boxShadow: '0 -4px 12px rgba(0,0,0,0.12)',
    maxHeight: '40vh', overflowY: 'auto',
  },
  header: { display: 'flex', justifyContent: 'space-between', marginBottom: 12 },
  clearBtn: { background: '#FEE2E2', color: '#991B1B', border: 'none', borderRadius: 4, padding: '6px 14px', cursor: 'pointer', fontWeight: 'bold' },
  table: { width: '100%', borderCollapse: 'collapse', fontSize: 13 },
  thLabel: { padding: '8px 12px', textAlign: 'left', width: 130, position: 'sticky', top: 0, backgroundColor: '#1E3A8A' },
  thContent: { padding: '8px 12px', textAlign: 'center', minWidth: 110, position: 'sticky', top: 0, backgroundColor: '#1E3A8A' },
  tdLabel: { padding: '7px 12px', fontWeight: 'bold', borderRight: '1px solid #E5E7EB' },
  tdContent: { padding: '7px 12px', textAlign: 'center', borderRight: '1px solid #F3F4F6', transition: 'background-color 0.2s' },
  removeBtn: { marginLeft: 8, background: 'rgba(255,255,255,0.2)', color: '#fff', border: 'none', borderRadius: 3, cursor: 'pointer', fontSize: 10 },
};

const HOLDING_ROWS: {
  label: string;
  key: keyof Holding;
  format?: (v: any) => string;
}[] = [
  {
    label: 'Qty',
    key: 'qty',
    format: (v) => Number(v).toLocaleString(),
  },
  {
    label: 'Invested Value',
    key: 'investedValue',
    format: (v) => '$' + Number(v).toLocaleString(),
  },
  {
    label: 'Current Value',
    key: 'currentValue',
    format: (v) => '$' + Number(v).toLocaleString(),
  },
  {
    label: 'Total Return',
    key: 'totalReturn',
    format: (v) => (Number(v) >= 0 ? '+' : '') + '$' + Number(v).toLocaleString(),
  },
  {
    label: 'Total Return %',
    key: 'id' as any, // Dummy key for percentage row
    format: (v) => (v ? (Number(v) >= 0 ? '+' : '') + Number(v).toFixed(2) + '%' : '0.00%'),
  },
];

export const HoldingComparePanel: React.FC = () => {
  const { compareList, clearCompare, toggleCompare } = useHoldingStore(
    useShallow((state) => ({
      compareList: state.compareList,
      clearCompare: state.clearCompare,
      toggleCompare: state.toggleCompare,
    }))
  );

  if (compareList.length < 2) return null;

  return (
    <div style={panelStyles.container}>
      {/* Header */}
      <div style={panelStyles.header}>
        <h3 style={{ margin: 0, color: '#1E3A8A', fontSize: 16 }}>
          Comparing {compareList.length} Holdings
        </h3>
        <button onClick={clearCompare} style={panelStyles.clearBtn}>
          Clear All
        </button>
      </div>

      {/* Comparison Table */}
      <table style={panelStyles.table}>
        <thead>
          <tr style={{ backgroundColor: '#1E3A8A', color: '#fff' }}>
            <th style={panelStyles.thLabel}>Metric</th>
            {compareList.map((holding) => (
              <th key={holding.id} style={panelStyles.thContent}>
                <div>{holding.symbol}</div>
                <button 
                  onClick={() => toggleCompare(holding)} 
                  style={panelStyles.removeBtn}
                >✕</button>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {HOLDING_ROWS.map((row, rowIndex) => {
            // Optimization: Calculate max/min for the row once
            const values = compareList.map(h => {
              if (row.label === 'Total Return %') {
                return (h.totalReturn / h.investedValue) * 100;
              }
              return Number(h[row.key]) || 0;
            });
            const maxVal = Math.max(...values);
            const minVal = Math.min(...values);

            return (
              <tr key={row.label} style={{ backgroundColor: rowIndex % 2 === 0 ? '#fff' : '#F8FAFC' }}>
                <td style={panelStyles.tdLabel}>{row.label}</td>
                {compareList.map((h) => {
                  let rawValue = h[row.key];
                  
                  if (row.label === 'Total Return %') {
                    rawValue = (h.totalReturn / h.investedValue) * 100;
                  }

                  const numValue = Number(rawValue) || 0;
                  const isPnlRow = row.key === 'totalReturn' || row.label === 'Total Return %';
                  
                  // Highlight Green for Max in EVERY row
                  const isBest = numValue === maxVal && maxVal !== minVal;
                  const isWorst = isPnlRow && numValue === minVal && numValue < 0;

                  return (
                    <td
                      key={h.id}
                      style={{
                        ...panelStyles.tdContent,
                        color: isBest ? '#166534' : isWorst ? '#991B1B' : '#111827',
                        backgroundColor: isBest ? '#D1FAE5' : isWorst ? '#FEE2E2' : 'transparent',
                        fontWeight: isBest || isWorst ? 'bold' : 'normal',
                      }}
                    >
                      {isBest && '▲ '}
                      {isWorst && '▼ '}
                      {row.format ? row.format(rawValue) : String(rawValue)}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
