import { databases, DATABASE_ID, PARTNER_COLLECTION_ID } from "../lib/appwrite";

/**
 * Register a new partner (using phone number as document ID)
 * @param {Object} data Partner registration data
 */
export const registerPartner = async (data) => {
  try {
    const documentId = `phone_${data.phone}`;

    // ✅ Check if partner already exists
    try {
      const existing = await databases.getDocument(
        DATABASE_ID,
        PARTNER_COLLECTION_ID,
        documentId
      );
      if (existing) {
        return { success: true, partner: existing, message: "Partner already exists" };
      }
    } catch (err) {
      // not found → continue to create
    }

    // ✅ Create partner
    const result = await databases.createDocument(
      DATABASE_ID,
      PARTNER_COLLECTION_ID,
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

    return { success: true, partner: result, message: "Partner registered successfully" };
  } catch (error) {
    console.error("❌ Partner registration failed:", error);
    return { success: false, error };
  }
};

/**
 * Get partner by phone
 * @param {string} phone Partner phone number
 */
export const getPartnerByPhone = async (phone) => {
  try {
    const documentId = `phone_${phone}`;
    const partner = await databases.getDocument(DATABASE_ID, PARTNER_COLLECTION_ID, documentId);
    return { success: true, partner };
  } catch (error) {
    console.error("❌ Partner not found:", error);
    return { success: false, error };
  }
};
