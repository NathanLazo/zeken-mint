'use client';
import { ReactNode } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const SolanaWalletConnectButton = dynamic(() =>
  import('@solana/wallet-adapter-react-ui').then((mod) => mod.WalletMultiButton)
);
import { Suspense } from 'react';
export function AppLayout({ children }: { children: ReactNode }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '6px 24px',
        }}
      >
        <div>
          <Link
            href="/"
            style={{
              textDecoration: 'none',
              color: 'white',
            }}
          >
            <div
              style={{
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '1px',
              }}
            >
              <p
                style={{
                  color: 'rgb(192 132 252)',
                }}
              >
                Zeken
              </p>
              Swap
            </div>
          </Link>
        </div>
        <div>
          <Suspense
            fallback={
              <div className="bg-zinc-900">
                <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-white"></div>
              </div>
            }
          >
            <SolanaWalletConnectButton
              className="bg-zinc-900"
              style={{
                color: 'white',
                backgroundColor: 'transparent',
              }}
            />
          </Suspense>
        </div>
      </div>
      <div style={{ flexGrow: 1, padding: '6px' }}>{children}</div>
      <footer
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '6px 10px',
        }}
      >
        <aside style={{ fontSize: 12 }}>
          <p>
            Powered by{' '}
            <a
              href="https://the-zen.dev"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: 'rgb(192 132 252)',
              }}
            >
              The Zen
            </a>
          </p>
        </aside>
      </footer>
    </div>
  );
}
