
---

# 3D Factory Visualization POC

## Angular 18 + Three.js + .NET + Blender

### Production-Ready Architecture Reference

---

# 1. Objective of the POC

The goal of this Proof of Concept (POC) is to validate a **production-ready architecture for factory digital-twin visualization** where:

* 3D machines are created in **Blender**
* Models are exported as **GLB**
* Angular + **Three.js renders the factory**
* **.NET APIs provide machine status**
* Machine status dynamically updates the 3D objects

Example:

```
Machine 101 status = RUNNING → cube becomes GREEN
Machine 101 status = DOWN → cube becomes RED
```

This validates the core pipeline:

```
Blender → GLB → Angular + Three.js → Machine Registry → .NET API → UI update
```

---

# 2. Key Architectural Principle

The most important rule in this architecture is:

> **3D assets and application logic must be separated.**

Blender should only produce **geometry**, while application behavior must exist in **Angular / Three.js**.

Blender exports **only data**, not runtime logic.

Blender exports:

✔ Mesh geometry
✔ Materials
✔ Object names
✔ Transforms

Blender does NOT export:

❌ Python scripts
❌ API integrations
❌ click logic
❌ runtime behavior

Therefore:

```
Blender → assets only
Angular/Three.js → runtime logic
.NET → machine data
```

This is the **industry standard architecture for digital twin systems**. 

---

# 3. Final Architecture

```
Blender
   │
   │ Export GLB
   ▼
Angular 18 + Three.js
   │
   │ Machine Registry
   ▼
.NET Web API
   │
   ▼
Machine Status Data
```

Architecture layers:

```
3D Visualization Layer
Machine Data Layer
Realtime Data Layer
```

Example architecture:

```
Angular 18
   │
Factory3D Module
   │
Three.js Scene
   │
Machine Registry
   │
API / SignalR
   │
.NET Backend
```



---

# 4. Tools Used

| Layer              | Technology   |
| ------------------ | ------------ |
| 3D modeling        | Blender      |
| 3D runtime engine  | Three.js     |
| Frontend           | Angular 18   |
| Backend            | .NET Web API |
| Data communication | REST API     |
| Future improvement | SignalR      |

---

# 5. Blender Setup

## Step 1 Install Blender

Download:

[https://www.blender.org/download/](https://www.blender.org/download/)

Install and launch Blender.

---

## Step 2 Create a Simple Machine

Default Blender scene contains:

```
Cube
Camera
Light
```

For the POC:

1 Delete Camera
2 Delete Light
3 Use Cube as machine body

---

## Step 3 Rename Object

This step is **critical**.

Open the **Outliner panel**.

Rename the object:

```
machine_101
```

Naming convention:

```
machine_<MachineId>
```

Example:

```
machine_101
machine_102
machine_103
```

Every machine must have a **unique name**. 

---

## Step 4 Export GLB

Export the model:

```
File → Export → glTF 2.0
```

Settings:

```
Format = GLB
Apply Transform = ✓
```

Save as:

```
factory.glb
```

---

# 6. Why Naming Matters

Three.js must detect machines inside the model.

Correct structure:

```
Scene
 ├ machine_101
 ├ machine_102
 ├ machine_103
```

Incorrect structure:

```
Scene
 └ FactoryMesh
```

If everything is merged into one mesh, dynamic updates become impossible. 

---

# 7. Backend Implementation (.NET)

A simple API returns machine status.

### MachineController

```csharp
[ApiController]
[Route("api/[controller]")]
public class MachineController : ControllerBase
{
    [HttpGet]
    public IActionResult GetMachines()
    {
        var data = new[]
        {
            new { machineId = 101, status = "RUNNING" }
        };

        return Ok(data);
    }
}
```

Example response:

```
[
 { "machineId":101, "status":"RUNNING" }
]
```

---

# 8. Angular 18 Setup

Angular 18 uses **standalone architecture**.

Important files:

```
app.config.ts
app.routes.ts
main.ts
```

Static assets are placed in:

```
public/
```

---

## Folder Structure

```
frontend
 ├ public
 │   └ models
 │       └ factory.glb
 │
 └ src
     └ app
         └ factory3d
             ├ factory3d.component.ts
             ├ factory3d.component.html
             └ factory3d.component.css
```

---

# 9. Three.js Scene Initialization

Inside Angular component:

```
scene
camera
renderer
lights
helpers
```

Example:

```
scene.background = light grey
camera.position = (5,5,5)
camera.lookAt(0,0,0)
```

Helpers added for debugging:

```
GridHelper
AxesHelper
```

---

# 10. Loading the Blender Model

Model is loaded using **GLTFLoader**.

```
loader.load('models/factory.glb')
```

After loading:

```
scene.add(model)
```

---

# 11. Machine Registry Pattern

The most important production concept is the **Machine Registry**.

When the model loads we map machines to IDs.

Example:

```
machineRegistry = {
   101 : mesh
}
```

Now updating a machine is easy:

```
machineRegistry[101].material.color.set("red")
```

This pattern is widely used in digital twin systems. 

---

# 12. Extract Machines from GLB

We traverse the model hierarchy.

```
model.traverse(child => {

   if(child.name.startsWith("machine_")){

      const id = child.name.split("_")[1]

      machineRegistry[id] = child

   }

})
```

Now Three.js knows which mesh corresponds to each machine.

---

# 13. Updating Machine Status

Angular calls the API.

```
GET /api/Machine
```

Example response:

```
{ machineId:101, status:"DOWN" }
```

We update the mesh:

```
mesh.material.color.set(0xff0000)
```

So:

```
RUNNING → Green
DOWN → Red
```

---

# 14. Lighting Fix

Blender exports **PBR materials**, which require directional lighting.

Therefore the scene must include:

```
AmbientLight
DirectionalLight
```

Example:

```
AmbientLight intensity 0.5
DirectionalLight position (5,10,5)
```

Without this the object appears black.

---

# 15. Render Loop

Three.js continuously renders the scene.

```
animate()
{
 requestAnimationFrame(animate)
 renderer.render(scene,camera)
}
```

---

# 16. Completed POC Pipeline

Final pipeline:

```
Blender
   ↓
factory.glb
   ↓
Angular + Three.js
   ↓
Machine Registry
   ↓
.NET API
   ↓
Machine Color Update
```

This confirms the **full digital twin pipeline works**.

---

# 17. Common Mistakes Developers Make

Typical mistakes in early implementations:

❌ Exporting entire factory as one mesh
❌ Not naming objects in Blender
❌ No machine-id mapping
❌ Trying to run logic inside Blender Python
❌ Updating scene instead of mesh

These cause most integration failures. 

---

# 18. Best Practices for Blender Modeling

Give the 3D team these rules:

### Rule 1

Each machine must have a **unique name**.

```
machine_101
machine_102
machine_103
```

### Rule 2

Never merge machines.

Bad:

```
FactoryMesh
```

Good:

```
machine_101
machine_102
machine_103
```

### Rule 3

Pivot should be centered.

This ensures correct camera zoom and rotation.



---

# 19. POC Development Strategy

Recommended order:

1 Create machines in Blender
2 Export `factory.glb`
3 Load model in Angular
4 Extract machines
5 Connect API
6 Update machine colors
7 Implement click detection
8 Implement camera zoom



---

# 20. Performance Considerations

Factories can contain **200-1000 machines**.

To maintain performance:

### GLTF Compression

Use **Draco compression**.

Benefits:

```
~80% smaller files
```

### Instanced Mesh

Instead of loading 200 identical machines:

```
InstancedMesh
```

This drastically improves rendering performance. 

---

# 21. Next Production Features

The POC proves the architecture works.

Next features to implement:

### Machine Click Detection

Using **Raycaster**.

```
Mouse click
   ↓
Raycaster
   ↓
Detect mesh
   ↓
machineId
```

### Camera Zoom

```
gsap.to(camera.position)
```

Smooth camera movement.

### Real-time Updates

Replace polling with:

```
SignalR
```

This allows machines to update instantly.

---

# 22. Final Result

This POC validates a **production-ready digital twin architecture**.

```
Blender → GLB
Angular → 3D viewer
Three.js → scene engine
.NET → machine data
API/SignalR → realtime updates
```

The system can now scale to:

```
10 machines
100 machines
500 machines
```

without architectural changes.

---

