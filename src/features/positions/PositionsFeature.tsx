import React from 'react';
import { useShallow } from 'zustand/shallow';
import { DataTable } from '../../components/DataTable';
import { usePositionStore } from '../../stores/usePositionStore';
import type { Position } from '../../types/stock.types';
 
interface PositionsFeatureProps {
  positions: Position[];
}
 
function pnlCell(value: unknown, suffix: string = ''): React.ReactNode {
 
  var numberValue  = Number(value);
 
  var isPositive   = numberValue >= 0;
  var textColour   = isPositive ? '#166534' : '#991B1B';
 
  var prefix = isPositive ? '+' : '';
 
  var currencySign = suffix === '%' ? '' : '$';
 
  return (
    <span style={{ color: textColour, fontWeight: 'bold' }}>
      {prefix}{currencySign}{numberValue.toFixed(2)}{suffix}
    </span>
  );
}
 
const PositionsFeature: React.FC<PositionsFeatureProps> = ({ positions }) => {
  const { toggleCompare, isInCompare } = usePositionStore(
    useShallow((state) => ({
      toggleCompare: state.toggleCompare,
      isInCompare: state.isInCompare,
      _listVersion: state.compareList.length
    }))
  );

  return (
    <>
      <h2 style={{ color: '#1E40AF' }}>Positions</h2>
      <DataTable<Position>
        data={positions}
        rowKey="id"
        filterKey="symbol"
        enableInfiniteScroll={true}
        pageSize={10}
        columns={[
          { key: 'symbol',   header: 'Symbol',    sortable: true },
          { key: 'Qty',      header: 'Qty',       sortable: true },
          { key: 'Avg_Price', header: 'Avg Price', sortable: true,
            render: function(value) { return '$' + Number(value).toFixed(2); }
          },
          { key: 'ltp',      header: 'LTP',       sortable: true,
            render: function(value) { return '$' + Number(value).toFixed(2); }
          },
          { key: 'pnl',    header: 'P&L',   sortable: true,
            render: function(value) { return pnlCell(value); }
          },
          { key: 'pnlPct', header: 'P&L %', sortable: true,
            render: function(_value, row) { 
              const calculatedPct = (row.pnl / (row.Qty * row.Avg_Price)) * 100;
              return pnlCell(calculatedPct, '%'); 
            }
          },
          {
            key: 'id',
            header: 'Compare',
            render: (_value, row) => {
              const active = isInCompare(row.id);
              return (
                <button
                  onClick={() => toggleCompare(row)}
                  style={{
                    padding: '4px 8px',
                    borderRadius: '4px',
                    fontSize: '11px',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    border: '1px solid #10B981',
                    transition: 'all 0.2s',
                    backgroundColor: active ? '#10B981' : 'transparent',
                    color: active ? '#fff' : '#10B981',
                  }}
                >
                  {active ? '✓ Selected' : '+ Add'}
                </button>
              );
            }
          }
        ]}
      />
    </>
  );
};
 
export default PositionsFeature;
