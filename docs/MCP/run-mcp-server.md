### RUN THE MCP SERVER (NOW)

Now we **run the server** on top of your **real Druid cluster**.

### 🔹 Step 1: Set environment variables

In the **same CMD window**:

```bash
C:\D drive folder\mcp\druid-mcp-server>set DRUID_ROUTER_URL=http://192.168.3.136:8888

C:\D drive folder\mcp\druid-mcp-server>set DRUID_MCP_READONLY_ENABLED=true

C:\D drive folder\mcp\druid-mcp-server>set SPRING_PROFILES_ACTIVE=http

C:\D drive folder\mcp\druid-mcp-server>set DRUID_MCP_SECURITY_OAUTH2_ENABLED=false
```

> Read-only = SAFE
> 
> 
> HTTP = Easy to inspect & integrate later
> 

---

### 🔹 Step 2: Run with preview enabled

```bash
java --enable-preview -jar target\druid-mcp-server-1.7.0.jar
```