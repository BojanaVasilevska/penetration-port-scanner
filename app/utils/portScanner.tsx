export async function scanPorts(target: string, ports: number[]): Promise<number[]> {
    const openPorts: number[] = [];
    
    for (const port of ports) {
      try {
        const response = await fetch(`http://${target}:${port}`);
        if (response.ok) {
          openPorts.push(port);
        }
      } catch {
        console.log(`Port ${port} is closed or unreachable`);
      }
    }
  
    return openPorts;
  }
  
  