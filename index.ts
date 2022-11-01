import app from "./app";
import { API_PORT } from "./configs/api";

app.listen(API_PORT || 8000, () => {
  console.log(`Server running on port ${API_PORT || 8000}`);
});
