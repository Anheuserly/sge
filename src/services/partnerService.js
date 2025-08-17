import { Client, Databases } from "appwrite";

const client = new Client()
  .setEndpoint("https://fra.cloud.appwrite.io/v1") // ✅ Your API Endpoint
  .setProject("680b2b830035595d7746");             // ✅ Your Project ID

const databases = new Databases(client);

// Your collection info
const DATABASE_ID = "680b2cfb002805548743"; // 👈 change if not default
const COLLECTION_ID = "680b308e002ef25fd54b"; // ✅ Partner Collection ID

/**
 * Register a new partner
 * @param {Object} data Partner registration data
 */
export const registerPartner = async (data) => {
  try {
    const documentId = `phone_${data.phone}`; // ✅ Custom ID

    const result = await databases.createDocument(
      DATABASE_ID,
      COLLECTION_ID,
      documentId,
      {
        name: data.name,
        phone: data.phone,
        businessName: data.businessName,
        profileImage: data.profileImage || "",
        isVerified: false,
        status: "pending",
        fcmToken: "",
        user_id: "",
        latitude: 0,
        longitude: 0,
        heading: 0,
        speed: 0,
        lastLocationUpdate: "",
        isOnline: false,
        panCardId: "",
        aadharFrontId: "",
        aadharBackId: "",
        selfieId: "",
        bankPassbookId: "",
        bankAccountNumber: "",
        bankIFSC: "",
        bankName: "",
        accountHolderName: "",
        kycStatus: "not_submitted",
        kycSubmittedAt: "",
        kycVerifiedAt: "",
        kycRejectionReason: "",
        accuracy: 0,
        altitude: 0,
        totalEarnings: 0,
        totalVisits: 0,
        completedServiceIds: [],
        lastServiceVisitAt: null,
        drivingLicenseId: "",
        vehicleType: "",
        vehicleNumber: "",
        experienceYears: "",
        languagesSpoken: [],
        ratings: 0,
        reviews: [],
        userId: "",
        createdAt: new Date().toISOString(),
      }
    );

    return result;
  } catch (error) {
    console.error("❌ Failed to register partner:", error);
    throw error;
  }
};
