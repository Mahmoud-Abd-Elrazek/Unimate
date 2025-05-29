import axios from "axios";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import useAuthStore from "../Auth/Auth.store";

interface BookingState {
    roomid: number;
    apartmentid: number;
    BookBed: (ApartmentId: number, RoomId: number) => Promise<void>;
    BookRoom: (ApartmentId: number, RoomId: number) => Promise<void>;
    BookApartment: (ApartmentId: number) => Promise<void>;
}

export const useBookingStore = create<BookingState>()(
    persist(
        (set) => ({
            roomid: 0,
            apartmentid: 0,

            BookBed: async (ApartmentId: number, RoomId: number) => {
                try {
                    const token = useAuthStore.getState().token;
                    const res = await axios.post(
                        "https://darkteam.runasp.net/BookBedEndpoint/BookBed",
                        {
                            apartmentId: ApartmentId,
                            roomId: RoomId,
                        },
                        {
                            headers: {
                                Authorization: `Bearer ${token}`,
                            },
                        }
                    );

                    console.log("✅ Bed booked successfully:", res.data);

                    // Optional: update state
                    set({ apartmentid: ApartmentId, roomid: RoomId });

                } catch (error) {
                    console.error("❌ Failed to book bed:", error);
                }
            },

            BookRoom: async (ApartmentId: number, RoomId: number) => {
                try {
                    const token = useAuthStore.getState().token;
                    const res = await axios.post(
                        "https://darkteam.runasp.net/RoomBookingEndpoint/BookRoom",
                        {
                            apartmentId: ApartmentId,
                            roomId: RoomId,
                        },
                        {
                            headers: {
                                Authorization: `Bearer ${token}`,
                            },
                        }
                    );

                    console.log("✅ Room booked successfully:", res.data);

                    // Optional: update state
                    set({ apartmentid: ApartmentId, roomid: RoomId });

                } catch (error) {
                    console.error("❌ Failed to book room:", error);
                }
            },
            BookApartment: async (ApartmentId: number) => {
                try {
                    const token = useAuthStore.getState().token;
                    const res = await axios.post(
                        "https://darkteam.runasp.net/BookApartmentEndpoint/BookApartment",
                        {
                            apartmentId: ApartmentId,

                        },
                        {
                            headers: {
                                Authorization: `Bearer ${token}`,
                            },
                        }
                    );

                    console.log("✅ Apartment booked successfully:", res.data);

                    // Optional: update state
                    set({ apartmentid: ApartmentId });

                } catch (error) {
                    console.error("❌ Failed to book apartment:", error);
                }
            },
        CancelBooking: async (ApartmentId: number) => {
                try {
                    const token = useAuthStore.getState().token;
                    const res = await axios.post(
                        "https://darkteam.runasp.net/CancelBookingEndpoint/CancelBooking",
                        {
                            apartmentId: ApartmentId,
                        
                        },
                        {
                            headers: {
                                Authorization: `Bearer ${token}`,
                            },
                        }
                    );

                    console.log("✅ Booking cancelled successfully:", res.data);

                    // Optional: update state
                    set({ apartmentid: 0, roomid: 0 });

                } catch (error) {
                    console.error("❌ Failed to cancel booking:", error);
                }
            }
        }),
        {
            name: "booking-storage",
        }
    )
);
