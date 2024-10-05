const parseEnv = () => {
    const prefix = "RSS_"; 
    const entries = Object.entries(process.env); 
   
    const filteredEntries = entries.filter(([key]) => key.startsWith(prefix));
   
    const output = filteredEntries
        .map(([key, value]) => `${key}=${value}`) 
        .join('; '); 

    console.log(output);
};

parseEnv();