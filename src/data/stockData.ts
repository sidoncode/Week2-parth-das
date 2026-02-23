import type { Holdings, Positions, Stock, Trade } from '../types/stock.types';

export const positions: Positions[] = [
    // --- Technology ---
    {
        id: 'p1',
        symbol: 'AAPL',
        Qty: 10,
        Avg_Price: 185.50,
        ltp: 264.58,
        pnl: 790.80  // (264.58 - 185.50) * 10
    },
    {
        id: 'p2',
        symbol: 'NVDA',
        Qty: 25,
        Avg_Price: 145.00,
        ltp: 189.82,
        pnl: 1120.50 // (189.82 - 145.00) * 25
    },
    {
        id: 'p3',
        symbol: 'MSFT',
        Qty: 8,
        Avg_Price: 385.10,
        ltp: 397.23,
        pnl: 97.04   // (397.23 - 385.10) * 8
    },
    {
        id: 'p4',
        symbol: 'META',
        Qty: 12,
        Avg_Price: 690.00,
        ltp: 655.66,
        pnl: 787.92  // (695.66 - 590.00) * 12
    },
    // --- Finance ---
    {
        id: 'p5',
        symbol: 'JPM',
        Qty: 20,
        Avg_Price: 194.00,
        ltp: 310.79,
        pnl: 2335.80 // (310.79 - 194.00) * 20
    },
    {
        id: 'p6',
        symbol: 'V',
        Qty: 15,
        Avg_Price: 380.50,
        ltp: 320.95,
        pnl: 606.75  // (320.95 - 380.50) * 15
    },
    {
        id: 'p7',
        symbol: 'GS',
        Qty: 5,
        Avg_Price: 395.00,
        ltp: 412.10,
        pnl: 85.50   // (412.10 - 395.00) * 5
    },
    // --- Automotive ---
    {
        id: 'p8',
        symbol: 'TSLA',
        Qty: 5,
        Avg_Price: 260.00,
        ltp: 411.82,
        pnl: 759.10  // (411.82 - 260.00) * 5
    },
    {
        id: 'p9',
        symbol: 'TM',
        Qty: 30,
        Avg_Price: 295.20,
        ltp: 215.60,
        pnl: 612.00  // (215.60 - 295.20) * 30
    },
    {
        id: 'p10',
        symbol: 'F',
        Qty: 100,
        Avg_Price: 10.50,
        ltp: 12.15,
        pnl: 165.00  // (12.15 - 10.50) * 100
    }
];




export const stocks: Stock[] = [
    // --- Technology (20) ---
    { id: '1', symbol: 'AAPL', name: 'Apple Inc.', price: 264.58, change: 2.15, changePct: 1.54, volume: 42070000, marketCap: 3880000000000, sector: 'Technology' },
    { id: '2', symbol: 'NVDA', name: 'NVIDIA Corp.', price: 189.82, change: 1.92, changePct: 1.02, volume: 178420000, marketCap: 4610000000000, sector: 'Technology' },
    { id: '3', symbol: 'MSFT', name: 'Microsoft Corp.', price: 397.23, change: 4.20, changePct: -0.31, volume: 34010000, marketCap: 2950000000000, sector: 'Technology' },
    { id: '4', symbol: 'GOOGL', name: 'Alphabet Inc.', price: 314.98, change: -0.95, changePct: 4.01, volume: 33660000, marketCap: 3810000000000, sector: 'Technology' },
    { id: '5', symbol: 'META', name: 'Meta Platforms Inc.', price: 655.66, change: 10.85, changePct: 1.69, volume: 14180000, marketCap: 1660000000000, sector: 'Technology' },
    { id: '6', symbol: 'AMD', name: 'Advanced Micro Devices', price: 155.20, change: 3.10, changePct: 2.04, volume: 65000000, marketCap: 250000000000, sector: 'Technology' },
    { id: '7', symbol: 'INTC', name: 'Intel Corp.', price: 35.50, change: -0.45, changePct: -1.25, volume: 45000000, marketCap: 150000000000, sector: 'Technology' },
    { id: '8', symbol: 'CRM', name: 'Salesforce Inc.', price: 285.30, change: 5.20, changePct: 1.86, volume: 5500000, marketCap: 275000000000, sector: 'Technology' },
    { id: '9', symbol: 'ORCL', name: 'Oracle Corp.', price: 125.40, change: 1.15, changePct: 0.93, volume: 8200000, marketCap: 340000000000, sector: 'Technology' },
    { id: '10', symbol: 'ADBE', name: 'Adobe Inc.', price: 580.15, change: 7.45, changePct: 1.30, volume: 3100000, marketCap: 260000000000, sector: 'Technology' },
    { id: '11', symbol: 'NFLX', name: 'Netflix Inc.', price: 610.50, change: -12.30, changePct: -1.98, volume: 4800000, marketCap: 265000000000, sector: 'Technology' },
    { id: '12', symbol: 'PYPL', name: 'PayPal Holdings', price: 65.20, change: 0.85, changePct: 1.32, volume: 12500000, marketCap: 70000000000, sector: 'Technology' },
    { id: '13', symbol: 'SQ', name: 'Block Inc.', price: 78.45, change: 2.10, changePct: 2.75, volume: 9800000, marketCap: 48000000000, sector: 'Technology' },
    { id: '14', symbol: 'SHOP', name: 'Shopify Inc.', price: 72.10, change: -1.45, changePct: -1.97, volume: 15400000, marketCap: 92000000000, sector: 'Technology' },
    { id: '15', symbol: 'SNOW', name: 'Snowflake Inc.', price: 165.30, change: 4.20, changePct: 2.61, volume: 6200000, marketCap: 54000000000, sector: 'Technology' },
    { id: '16', symbol: 'PLTR', name: 'Palantir Technologies', price: 24.50, change: 1.15, changePct: 4.92, volume: 45000000, marketCap: 54000000000, sector: 'Technology' },
    { id: '17', symbol: 'CRWD', name: 'CrowdStrike Holdings', price: 320.10, change: 8.45, changePct: 2.71, volume: 3800000, marketCap: 76000000000, sector: 'Technology' },
    { id: '18', symbol: 'PANW', name: 'Palo Alto Networks', price: 295.40, change: 4.20, changePct: 1.44, volume: 4100000, marketCap: 95000000000, sector: 'Technology' },
    { id: '19', symbol: 'CSCO', name: 'Cisco Systems', price: 48.20, change: -0.35, changePct: -0.72, volume: 18500000, marketCap: 195000000000, sector: 'Technology' },
    { id: '20', symbol: 'IBM', name: 'International Business Machines', price: 192.50, change: 2.15, changePct: 1.13, volume: 4200000, marketCap: 175000000000, sector: 'Technology' },

    // --- Finance (20) ---
    { id: '21', symbol: 'JPM', name: 'JPMorgan Chase', price: 310.79, change: 1.05, changePct: 0.89, volume: 7790000, marketCap: 838210000000, sector: 'Finance' },
    { id: '22', symbol: 'V', name: 'Visa Inc.', price: 320.95, change: 2.01, changePct: 0.63, volume: 6830000, marketCap: 611730000000, sector: 'Finance' },
    { id: '23', symbol: 'MA', name: 'Mastercard Inc.', price: 524.40, change: 3.12, changePct: 0.60, volume: 2150000, marketCap: 478500000000, sector: 'Finance' },
    { id: '24', symbol: 'BAC', name: 'Bank of America', price: 48.25, change: -0.15, changePct: -0.31, volume: 32400000, marketCap: 375200000000, sector: 'Finance' },
    { id: '25', symbol: 'GS', name: 'Goldman Sachs', price: 412.10, change: 5.45, changePct: 1.34, volume: 1850000, marketCap: 135600000000, sector: 'Finance' },
    { id: '26', symbol: 'WFC', name: 'Wells Fargo & Co', price: 58.40, change: 0.45, changePct: 0.78, volume: 15400000, marketCap: 210000000000, sector: 'Finance' },
    { id: '27', symbol: 'C', name: 'Citigroup Inc.', price: 62.15, change: -0.85, changePct: -1.35, volume: 12100000, marketCap: 118000000000, sector: 'Finance' },
    { id: '28', symbol: 'BLK', name: 'BlackRock Inc.', price: 820.50, change: 12.40, changePct: 1.53, volume: 650000, marketCap: 122000000000, sector: 'Finance' },
    { id: '29', symbol: 'MS', name: 'Morgan Stanley', price: 95.30, change: 1.15, changePct: 1.22, volume: 7200000, marketCap: 155000000000, sector: 'Finance' },
    { id: '30', symbol: 'RY', name: 'Royal Bank of Canada', price: 145.20, change: 0.85, changePct: 0.59, volume: 2400000, marketCap: 205000000000, sector: 'Finance' },
    { id: '31', symbol: 'TD', name: 'Toronto-Dominion Bank', price: 82.40, change: -0.45, changePct: -0.54, volume: 3100000, marketCap: 148000000000, sector: 'Finance' },
    { id: '32', symbol: 'HSBC', name: 'HSBC Holdings', price: 42.15, change: 0.35, changePct: 0.84, volume: 2100000, marketCap: 162000000000, sector: 'Finance' },
    { id: '33', symbol: 'AXP', name: 'American Express', price: 225.40, change: 4.15, changePct: 1.88, volume: 2800000, marketCap: 162000000000, sector: 'Finance' },
    { id: '34', symbol: 'PYPL', name: 'PayPal Holdings', price: 65.20, change: 0.85, changePct: 1.32, volume: 12500000, marketCap: 70000000000, sector: 'Finance' },
    { id: '35', symbol: 'COF', name: 'Capital One Financial', price: 142.30, change: 2.15, changePct: 1.53, volume: 2400000, marketCap: 54000000000, sector: 'Finance' },
    { id: '36', symbol: 'UBS', name: 'UBS Group AG', price: 28.50, change: 0.15, changePct: 0.53, volume: 3200000, marketCap: 95000000000, sector: 'Finance' },
    { id: '37', symbol: 'HSBC', name: 'HSBC Holdings', price: 42.15, change: 0.35, changePct: 0.84, volume: 2100000, marketCap: 162000000000, sector: 'Finance' },
    { id: '38', symbol: 'BNP', name: 'BNP Paribas', price: 65.40, change: -1.15, changePct: -1.73, volume: 1200000, marketCap: 78000000000, sector: 'Finance' },
    { id: '39', symbol: 'BCS', name: 'Barclays PLC', price: 10.20, change: 0.12, changePct: 1.19, volume: 5400000, marketCap: 38000000000, sector: 'Finance' },
    { id: '40', symbol: 'DB', name: 'Deutsche Bank', price: 15.45, change: -0.25, changePct: -1.59, volume: 4200000, marketCap: 32000000000, sector: 'Finance' },

    // --- Automotive (20) ---
    { id: '41', symbol: 'TSLA', name: 'Tesla Inc.', price: 411.82, change: -7.30, changePct: 0.03, volume: 57910000, marketCap: 1550000000000, sector: 'Automotive' },
    { id: '42', symbol: 'F', name: 'Ford Motor Co.', price: 12.15, change: 0.08, changePct: 0.66, volume: 45200000, marketCap: 48500000000, sector: 'Automotive' },
    { id: '43', symbol: 'GM', name: 'General Motors', price: 45.30, change: -0.42, changePct: -0.92, volume: 12800000, marketCap: 51200000000, sector: 'Automotive' },
    { id: '44', symbol: 'TM', name: 'Toyota Motor Corp.', price: 215.60, change: 1.25, changePct: 0.58, volume: 1200000, marketCap: 285400000000, sector: 'Automotive' },
    { id: '45', symbol: 'STLA', name: 'Stellantis N.V.', price: 24.18, change: -0.12, changePct: -0.49, volume: 4300000, marketCap: 74200000000, sector: 'Automotive' },
    { id: '46', symbol: 'HMC', name: 'Honda Motor Co.', price: 32.50, change: 0.45, changePct: 1.40, volume: 2100000, marketCap: 55000000000, sector: 'Automotive' },
    { id: '47', symbol: 'RIVN', name: 'Rivian Automotive', price: 11.20, change: -0.85, changePct: -7.05, volume: 25000000, marketCap: 11000000000, sector: 'Automotive' },
    { id: '48', symbol: 'LCID', name: 'Lucid Group', price: 3.15, change: -0.15, changePct: -4.55, volume: 18000000, marketCap: 7000000000, sector: 'Automotive' },
    { id: '49', symbol: 'NIO', name: 'NIO Inc.', price: 5.40, change: 0.12, changePct: 2.27, volume: 32000000, marketCap: 11000000000, sector: 'Automotive' },
    { id: '50', symbol: 'XPEV', name: 'XPeng Inc.', price: 8.20, change: -0.45, changePct: -5.20, volume: 12000000, marketCap: 7500000000, sector: 'Automotive' },
    { id: '51', symbol: 'BYD', name: 'BYD Company', price: 28.50, change: 1.15, changePct: 4.20, volume: 5400000, marketCap: 85000000000, sector: 'Automotive' },
    { id: '52', symbol: 'BMW', name: 'Bayerische Motoren Werke', price: 105.40, change: 1.15, changePct: 1.10, volume: 1200000, marketCap: 65000000000, sector: 'Automotive' },
    { id: '53', symbol: 'VOW', name: 'Volkswagen AG', price: 125.20, change: -2.45, changePct: -1.92, volume: 850000, marketCap: 75000000000, sector: 'Automotive' },
    { id: '54', symbol: 'RACE', name: 'Ferrari N.V.', price: 412.30, change: 12.45, changePct: 3.11, volume: 450000, marketCap: 75000000000, sector: 'Automotive' },
    { id: '55', symbol: 'MBG', name: 'Mercedes-Benz Group', price: 72.40, change: 0.85, changePct: 1.19, volume: 1100000, marketCap: 78000000000, sector: 'Automotive' },
    { id: '56', symbol: 'HYMTF', name: 'Hyundai Motor', price: 45.20, change: 0.45, changePct: 1.01, volume: 320000, marketCap: 38000000000, sector: 'Automotive' },
    { id: '57', symbol: 'NSANY', name: 'Nissan Motor', price: 7.15, change: -0.12, changePct: -1.65, volume: 2100000, marketCap: 14000000000, sector: 'Automotive' },
    { id: '58', symbol: 'MZDAY', name: 'Mazda Motor', price: 5.40, change: 0.05, changePct: 0.93, volume: 1200000, marketCap: 3500000000, sector: 'Automotive' },
    { id: '59', symbol: 'SUBAR', name: 'Subaru Corp', price: 10.20, change: 0.15, changePct: 1.49, volume: 850000, marketCap: 7500000000, sector: 'Automotive' },
    { id: '60', symbol: 'TTM', name: 'Tata Motors', price: 28.50, change: 1.15, changePct: 4.20, volume: 5400000, marketCap: 25000000000, sector: 'Automotive' },

    // --- Healthcare (20) ---
    { id: '61', symbol: 'JNJ', name: 'Johnson & Johnson', price: 155.20, change: 1.05, changePct: 0.68, volume: 6500000, marketCap: 375000000000, sector: 'Healthcare' },
    { id: '62', symbol: 'PFE', name: 'Pfizer Inc.', price: 28.40, change: -0.45, changePct: -1.56, volume: 25000000, marketCap: 160000000000, sector: 'Healthcare' },
    { id: '63', symbol: 'MRK', name: 'Merck & Co.', price: 128.50, change: 2.15, changePct: 1.70, volume: 5400000, marketCap: 325000000000, sector: 'Healthcare' },
    { id: '64', symbol: 'ABBV', name: 'AbbVie Inc.', price: 175.40, change: 3.12, changePct: 1.81, volume: 4200000, marketCap: 310000000000, sector: 'Healthcare' },
    { id: '65', symbol: 'LLY', name: 'Eli Lilly', price: 820.50, change: 25.40, changePct: 3.19, volume: 2100000, marketCap: 780000000000, sector: 'Healthcare' },
    { id: '66', symbol: 'UNH', name: 'UnitedHealth Group', price: 512.30, change: 8.45, changePct: 1.68, volume: 3100000, marketCap: 475000000000, sector: 'Healthcare' },
    { id: '67', symbol: 'CVS', name: 'CVS Health', price: 72.45, change: -1.15, changePct: -1.56, volume: 6200000, marketCap: 91000000000, sector: 'Healthcare' },
    { id: '68', symbol: 'AMGN', name: 'Amgen Inc.', price: 310.20, change: 4.15, changePct: 1.36, volume: 1800000, marketCap: 166000000000, sector: 'Healthcare' },
    { id: '69', symbol: 'GILD', name: 'Gilead Sciences', price: 75.40, change: 0.85, changePct: 1.14, volume: 4500000, marketCap: 94000000000, sector: 'Healthcare' },
    { id: '70', symbol: 'TMO', name: 'Thermo Fisher Scientific', price: 580.15, change: 12.45, changePct: 2.19, volume: 1200000, marketCap: 220000000000, sector: 'Healthcare' },
    { id: '71', symbol: 'MDT', name: 'Medtronic PLC', price: 85.20, change: 0.45, changePct: 0.53, volume: 3800000, marketCap: 112000000000, sector: 'Healthcare' },
    { id: '72', symbol: 'ISRG', name: 'Intuitive Surgical', price: 395.40, change: 7.45, changePct: 1.92, volume: 1100000, marketCap: 140000000000, sector: 'Healthcare' },
    { id: '73', symbol: 'SYK', name: 'Stryker Corp.', price: 345.20, change: 5.15, changePct: 1.51, volume: 950000, marketCap: 130000000000, sector: 'Healthcare' },
    { id: '74', symbol: 'BDX', name: 'Becton Dickinson', price: 242.30, change: -2.15, changePct: -0.88, volume: 850000, marketCap: 70000000000, sector: 'Healthcare' },
    { id: '75', symbol: 'ZBH', name: 'Zimmer Biomet', price: 125.40, change: 1.15, changePct: 0.93, volume: 1200000, marketCap: 260000000000, sector: 'Healthcare' },
    { id: '76', symbol: 'EW', name: 'Edwards Lifesciences', price: 82.15, change: 1.45, changePct: 1.80, volume: 2400000, marketCap: 50000000000, sector: 'Healthcare' },
    { id: '77', symbol: 'REGN', name: 'Regeneron Pharma', price: 915.40, change: 18.45, changePct: 2.06, volume: 650000, marketCap: 98000000000, sector: 'Healthcare' },
    { id: '78', symbol: 'VRTX', name: 'Vertex Pharma', price: 412.30, change: 9.45, changePct: 2.34, volume: 1100000, marketCap: 106000000000, sector: 'Healthcare' },
    { id: '79', symbol: 'BNTX', name: 'BioNTech SE', price: 95.20, change: -3.45, changePct: -3.50, volume: 1500000, marketCap: 23000000000, sector: 'Healthcare' },
    { id: '80', symbol: 'MRNA', name: 'Moderna Inc.', price: 105.40, change: -5.15, changePct: -4.66, volume: 4200000, marketCap: 40000000000, sector: 'Healthcare' },

    // --- Consumer & Retail (20) ---
    { id: '81', symbol: 'WMT', name: 'Walmart Inc.', price: 165.20, change: 1.15, changePct: 0.70, volume: 12000000, marketCap: 445000000000, sector: 'Consumer' },
    { id: '82', symbol: 'AMZN', name: 'Amazon.com Inc.', price: 185.40, change: 3.12, changePct: 1.71, volume: 35000000, marketCap: 1920000000000, sector: 'Consumer' },
    { id: '83', symbol: 'COST', name: 'Costco Wholesale', price: 725.30, change: 12.45, changePct: 1.75, volume: 2100000, marketCap: 322000000000, sector: 'Consumer' },
    { id: '84', symbol: 'TGT', name: 'Target Corp.', price: 168.45, change: -2.15, changePct: -1.26, volume: 4200000, marketCap: 78000000000, sector: 'Consumer' },
    { id: '85', symbol: 'HD', name: 'Home Depot', price: 345.20, change: 4.15, changePct: 1.22, volume: 3800000, marketCap: 345000000000, sector: 'Consumer' },
    { id: '86', symbol: 'LOW', name: 'Lowes Companies', price: 232.15, change: 2.15, changePct: 0.93, volume: 2400000, marketCap: 135000000000, sector: 'Consumer' },
    { id: '87', symbol: 'NKE', name: 'Nike Inc.', price: 92.40, change: -1.15, changePct: -1.23, volume: 6500000, marketCap: 140000000000, sector: 'Consumer' },
    { id: '88', symbol: 'SBUX', name: 'Starbucks Corp.', price: 88.15, change: 0.85, changePct: 0.97, volume: 5400000, marketCap: 100000000000, sector: 'Consumer' },
    { id: '89', symbol: 'MCD', name: 'McDonalds Corp.', price: 285.40, change: 2.15, changePct: 0.76, volume: 3100000, marketCap: 206000000000, sector: 'Consumer' },
    { id: '90', symbol: 'KO', name: 'Coca-Cola Co.', price: 61.20, change: 0.45, changePct: 0.74, volume: 11000000, marketCap: 265000000000, sector: 'Consumer' },
    { id: '91', symbol: 'PEP', name: 'PepsiCo Inc.', price: 172.45, change: 1.15, changePct: 0.67, volume: 4200000, marketCap: 236000000000, sector: 'Consumer' },
    { id: '92', symbol: 'PG', name: 'Procter & Gamble', price: 162.30, change: 1.15, changePct: 0.71, volume: 5400000, marketCap: 385000000000, sector: 'Consumer' },
    { id: '93', symbol: 'UL', name: 'Unilever PLC', price: 52.40, change: 0.35, changePct: 0.67, volume: 2100000, marketCap: 130000000000, sector: 'Consumer' },
    { id: '94', symbol: 'EL', name: 'Estee Lauder', price: 145.20, change: -4.15, changePct: -2.78, volume: 1800000, marketCap: 52000000000, sector: 'Consumer' },
    { id: '95', symbol: 'DIS', name: 'Walt Disney Co.', price: 112.30, change: 1.45, changePct: 1.31, volume: 8200000, marketCap: 205000000000, sector: 'Consumer' },
    { id: '96', symbol: 'TJX', name: 'TJX Companies', price: 102.40, change: 1.15, changePct: 1.14, volume: 3800000, marketCap: 115000000000, sector: 'Consumer' },
    { id: '97', symbol: 'LVMUY', name: 'LVMH Moet Hennessy', price: 175.20, change: 4.15, changePct: 2.43, volume: 1200000, marketCap: 415000000000, sector: 'Consumer' },
    { id: '98', symbol: 'OR.PA', name: 'LOreal SA', price: 442.30, change: 6.45, changePct: 1.48, volume: 850000, marketCap: 235000000000, sector: 'Consumer' },
    { id: '99', symbol: 'ZARA', name: 'Inditex SA', price: 42.15, change: 0.85, changePct: 2.06, volume: 2100000, marketCap: 130000000000, sector: 'Consumer' },
    { id: '100', symbol: 'H&M', name: 'H&M Group', price: 15.40, change: -0.25, changePct: -1.60, volume: 4200000, marketCap: 24000000000, sector: 'Consumer' }
];



export const trades: Trade[] = [
    {
        id: 't1', stockId: '1', symbol: 'AAPL', type: 'BUY',
        quantity: 10, price: 175.00, date: '2024-01-15'
    },
    {
        id: 't2', stockId: '3', symbol: 'MSFT', type: 'BUY',
        quantity: 5, price: 360.00, date: '2024-02-20'
    },
    {
        id: 't3', stockId: '4', symbol: 'TSLA', type: 'SELL',
        quantity: 8, price: 265.00, date: '2024-03-10'
    },
];

export const holdings: Holdings[] = [
    {
        id: 'h1',
        symbol: 'AAPL',
        qty: 10,
        investedValue: 1855.00,
        currentValue: 2645.80,
        totalReturn: 790.80
    },
    {
        id: 'h2',
        symbol: 'NVDA',
        qty: 25,
        investedValue: 3625.00,
        currentValue: 4745.50,
        totalReturn: 1120.50
    },
    {
        id: 'h3',
        symbol: 'MSFT',
        qty: 8,
        investedValue: 3080.80,
        currentValue: 3177.84,
        totalReturn: 97.04
    },
    {
        id: 'h4',
        symbol: 'JPM',
        qty: 20,
        investedValue: 3880.00,
        currentValue: 6215.80,
        totalReturn: 2335.80
    },
    {
        id: 'h5',
        symbol: 'TSLA',
        qty: 5,
        investedValue: 1300.00,
        currentValue: 2059.10,
        totalReturn: 759.10
    }
];

