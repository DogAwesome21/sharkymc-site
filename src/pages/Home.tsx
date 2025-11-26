import { useEffect, useState } from 'react';
import { Server, Users, Wifi, WifiOff } from 'lucide-react';

interface ServerStatus {
  online: boolean;
  players?: {
    online: number;
    max: number;
  };
  version?: string;
  motd?: string;
}

function Home() {
  const [serverStatus, setServerStatus] = useState<ServerStatus | null>(null);
  const [loading, setLoading] = useState(true);

  const SERVER_IP = 'sharkymc.falixsrv.me';
  const BEDROCK_PORT = '42914';

  useEffect(() => {
    const checkServerStatus = async () => {
      try {
        const response = await fetch(`https://api.mcstatus.io/v2/status/java/${SERVER_IP}`);
        const data = await response.json();

        setServerStatus({
          online: data.online || false,
          players: data.players,
          version: data.version?.name_clean,
          motd: data.motd?.clean,
        });
      } catch (error) {
        setServerStatus({ online: false });
      } finally {
        setLoading(false);
      }
    };

    checkServerStatus();
    const interval = setInterval(checkServerStatus, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 mb-6 drop-shadow-2xl">
            SharkyMC
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            An Awesome Minecraft Server Experience
          </p>

          <a
            href="https://discord.gg/Jx9tveNVDY"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-10 py-4 rounded-lg font-bold text-lg border-2 border-indigo-400 transition-all duration-300 hover:scale-110 shadow-2xl hover:shadow-indigo-500/50"
          >
            Join Our Discord
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-gray-800/60 backdrop-blur-sm rounded-xl p-8 border border-blue-500/30 shadow-xl">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                <Server className="text-blue-400" size={32} />
                Server Status
              </h2>
              {loading ? (
                <div className="animate-pulse flex items-center gap-2 text-gray-400">
                  <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                  Checking...
                </div>
              ) : serverStatus?.online ? (
                <div className="flex items-center gap-2 text-green-400 font-semibold">
                  <Wifi size={20} />
                  Online
                </div>
              ) : (
                <div className="flex items-center gap-2 text-red-400 font-semibold">
                  <WifiOff size={20} />
                  Offline
                </div>
              )}
            </div>

            <div className="space-y-4">
              <div className="bg-gray-900/50 rounded-lg p-4">
                <div className="text-gray-400 text-sm mb-1">Java Edition</div>
                <div className="text-white font-mono text-lg">{SERVER_IP}</div>
              </div>

              <div className="bg-gray-900/50 rounded-lg p-4">
                <div className="text-gray-400 text-sm mb-1">Bedrock Port</div>
                <div className="text-white font-mono text-lg">{BEDROCK_PORT}</div>
              </div>

              {serverStatus?.online && serverStatus.players && (
                <div className="bg-gray-900/50 rounded-lg p-4">
                  <div className="text-gray-400 text-sm mb-1 flex items-center gap-2">
                    <Users size={16} />
                    Players Online
                  </div>
                  <div className="text-white font-bold text-2xl">
                    {serverStatus.players.online} / {serverStatus.players.max}
                  </div>
                </div>
              )}

              {serverStatus?.version && (
                <div className="bg-gray-900/50 rounded-lg p-4">
                  <div className="text-gray-400 text-sm mb-1">Version</div>
                  <div className="text-white font-medium">{serverStatus.version}</div>
                </div>
              )}
            </div>
          </div>

          <div className="bg-gray-800/60 backdrop-blur-sm rounded-xl p-8 border border-blue-500/30 shadow-xl">
            <h2 className="text-2xl font-bold text-white mb-6">How to Join</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-blue-400 mb-3">Java Edition</h3>
                <ol className="space-y-2 text-gray-300">
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-sm font-bold">1</span>
                    <span>Open Minecraft Java Edition</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-sm font-bold">2</span>
                    <span>Click "Multiplayer"</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-sm font-bold">3</span>
                    <span>Add server: <span className="font-mono bg-gray-900 px-2 py-1 rounded">{SERVER_IP}</span></span>
                  </li>
                </ol>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-cyan-400 mb-3">Bedrock Edition</h3>
                <ol className="space-y-2 text-gray-300">
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-cyan-600 rounded-full flex items-center justify-center text-sm font-bold">1</span>
                    <span>Open Minecraft Bedrock</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-cyan-600 rounded-full flex items-center justify-center text-sm font-bold">2</span>
                    <span>Go to "Servers" tab</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-cyan-600 rounded-full flex items-center justify-center text-sm font-bold">3</span>
                    <span>Use port: <span className="font-mono bg-gray-900 px-2 py-1 rounded">{BEDROCK_PORT}</span></span>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
