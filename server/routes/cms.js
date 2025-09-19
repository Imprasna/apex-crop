// cms.js
import supabase from "../config/supabaseClient.js"; // Make sure path is correct
import multer from "multer";

// Memory storage for multer
var upload = multer({ storage: multer.memoryStorage() });

export async function cms(req, res) {


  // Use multer manually
  upload.single("image")(req, res, async (err) => {
    if (err) {
      return res.status(400).json({ message: "Image upload failed", error: err.message });
    }

    try {
      const {
        title,
        date,
        location,
        entryFee,
        maxPlayers,
        currentPlayers,
        level,
        prizes,
        status,
      } = req.body;

      let imageUrl = null;
      const bucketName = "Apex-bucket";

      // Upload image if present
      if (req.file) {
        const fileName = `${Date.now()}_${req.file.originalname}`;

        const { data: uploadData, error: uploadError } = await supabase.storage
          .from(bucketName)
          .upload(fileName, req.file.buffer, {
            contentType: req.file.mimetype,
          });

        if (uploadError) {
          throw new Error(`Supabase upload failed: ${uploadError.message}`);
        }

        imageUrl = `https://vivgtmnlpjlrbcmztfba.supabase.co/storage/v1/object/public/${bucketName}/${fileName}`;
      }

      // Save everything as STRING
      const tournament = {
        title: String(title || ""),
        date: String(date || ""),
        location: String(location || ""),
        entry_fee: String(entryFee || ""),
        max_players: String(maxPlayers || ""),
        current_players: String(currentPlayers || ""),
        level: String(level || ""),
        prizes: String(prizes || ""),
        status: String(status || ""),
        image_url: imageUrl ? String(imageUrl) : "",
      };

      const { data, error } = await supabase
        .from("cms-tournaments")
        .insert([tournament]);

      if (error) throw new Error(error.message);

      console.log("Tournament saved successfully:", data);

      res.status(200).json({
        message: "Tournament submitted successfully!",
        data,
      });
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ message: "Server error", error: error.message });
    }
  });
}
