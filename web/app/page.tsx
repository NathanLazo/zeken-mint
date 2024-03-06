'use client';

import { useEffect } from 'react';
import styles from './page.module.css';

function Page() {
  useEffect(() => {
    // Dynamically load the Jupiter script
    const script = document.createElement('script');
    script.src = 'https://terminal.jup.ag/main-v2.js';
    script.onload = () => launchJupiter(); // Initialize Jupiter after the script loads
    document.head.appendChild(script);
  }, []);

  function launchJupiter() {
    if (window.Jupiter) {
      window.Jupiter.init({
        displayMode: 'integrated',
        integratedTargetId: 'integrated-terminal',
        endpoint:
          'https://burned-withered-county.solana-mainnet.quiknode.pro/0a8c94fb559cd5cb92eb4f5c1cddbc2d91263da9',
        strictTokenList: false,
        defaultExplorer: 'SolanaFM',
        formProps: {
          initialAmount: '888888880000',
          initialInputMint: 'DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263',
          initialOutputMint: 'AZsHEMXd36Bj1EMNXhowJajpUXzrKcK57wW4ZGXVa7yR',
        },
      });
    } else {
      console.error('Jupiter script not loaded yet');
    }
  }
  return (
    <div className={styles.body}>
      <div id="integrated-terminal"></div>
    </div>
  );
}

export default Page;
