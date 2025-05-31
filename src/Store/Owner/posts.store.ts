import axios from 'axios';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import useAuthStore from '../Auth/Auth.store';
import { toast } from 'sonner';

interface Room {
  id: string;
  description: string;
  price: number;
  bednumber: number;
  hasAC: boolean;
  image?: File;
}

interface PostsState {
  Location: number;
  DescribeLocation: string;
  NumberOfRooms: string;
  Floor: string;
  Capecity: number;
  Description: string;
  GenderAcceptance: number;
  DurationType: number;

  kitchenImage: File | undefined;
  bathroomImage: File | undefined;
  outsideImage: File | undefined;
  livingRoomImage: File | undefined;

  services: { id: number; isSelected: boolean }[];
  Rooms: Room[];

  setLocation: (Location: number) => void;
  setDescribeLocation: (DescribeLocation: string) => void;
  setNumberOfRooms: (NumberOfRooms: string) => void;
  setCapecity: (Capecity: number) => void;
  setDescription: (Description: string) => void;
  setFloor: (Floor: string) => void;
  setGenderAcceptance: (GenderAcceptance: number) => void;
  setDurationType: (DurationType: string) => void;

  setKitchenImage: (kitchenImage: File | undefined) => void;
  setBathroomImage: (bathroomImage: File | undefined) => void;
  setOutsideImage: (outsideImage: File | undefined) => void;
  setLivingRoomImage: (livingRoomImage: File | undefined) => void;
  setServices: (services: { id: number; isSelected: boolean }[]) => void;

  addRoom: (description: string, price: number, hasAC: boolean, bednumber: number, image?: File) => void;
  updateRoom: (updatedRoom: Room) => void;
  deleteRoom: (roomId: string) => void;

  AddPost: () => Promise<void>;
}

export const usePostsStore = create<PostsState>()(
  persist(
    (set, get) => ({
      Location: 0,
      Description: '',
      Floor: '',
      GenderAcceptance: 0,
      DurationType: 0,
      DescribeLocation: '',
      NumberOfRooms: '',
      Capecity: 0,

      kitchenImage: undefined,
      bathroomImage: undefined,
      outsideImage: undefined,
      livingRoomImage: undefined,

      services: [],
      Rooms: [],

      setLocation: (Location) => set({ Location }),
      setDescription: (Description) => set({ Description }),
      setFloor: (Floor) => set({ Floor }),
      setGenderAcceptance: (GenderAcceptance) => set({ GenderAcceptance: Number(GenderAcceptance) }),
      setDurationType: (DurationType) => set({ DurationType: Number(DurationType) }),
      setDescribeLocation: (DescribeLocation) => set({ DescribeLocation }),
      setNumberOfRooms: (NumberOfRooms) => set({ NumberOfRooms }),
      setCapecity: (Capecity) => set({ Capecity }),

      setKitchenImage: (kitchenImage) => set({ kitchenImage }),
      setBathroomImage: (bathroomImage) => set({ bathroomImage }),
      setOutsideImage: (outsideImage) => set({ outsideImage }),
      setLivingRoomImage: (livingRoomImage) => set({ livingRoomImage }),

      setServices: (services) =>
        set({
          services: [...services.map((s) => ({
            id: Number(s.id),
            isSelected: s.isSelected,
          }))],
        }),

      addRoom: (description, price, hasAC, bednumber, image) => {
        const newRoom: Room = {
          id: `room-${Date.now()}`,
          description,
          price,
          bednumber,
          hasAC,
          image,
        };
        set((state) => ({ Rooms: [...state.Rooms, newRoom] }));
      },

      updateRoom: (updatedRoom) => {
        set((state) => ({
          Rooms: state.Rooms.map((room) =>
            room.id === updatedRoom.id ? updatedRoom : room
          ),
        }));
      },

      deleteRoom: (roomId) => {
        set((state) => ({
          Rooms: state.Rooms.filter((room) => room.id !== roomId),
        }));
      },

      AddPost: async () => {
        const formData = new FormData();
        try {
          const state = get();

          const selectedServiceIds = Array.from(
            new Set(
              state.services
                .filter((s) => s.isSelected)
                .map((s) => Number(s.id))
                .filter((id) => !isNaN(id))
            )
          );

          formData.append('Location', state.Location.toString());
          formData.append('Description', state.Description);
          formData.append('Capecity', state.Capecity.toString());
          formData.append('DescribeLocation', state.DescribeLocation);
          formData.append('Floor', state.Floor);
          formData.append('GenderAcceptance', state.GenderAcceptance.toString());

          state.Rooms.forEach((room, index) => {
            formData.append(`Rooms[${index}].Description`, room.description);
            formData.append(`Rooms[${index}].Price`, room.price.toString());
            formData.append(`Rooms[${index}].hasAC`, room.hasAC.toString());
            if (room.image) {
              formData.append(`Rooms[${index}].Image`, room.image);
            }
            formData.append(`Rooms[${index}].bedsNumber`, room.bednumber.toString());
          });

          selectedServiceIds.forEach((id, index) => {
            formData.append(`CategoryFacilities[${index}].IsSelected`, 'true');
            formData.append(`CategoryFacilities[${index}].FacilityId`, id.toString());
          });

          if (state.kitchenImage) formData.append('Images.Kitchen', state.kitchenImage);
          if (state.bathroomImage) formData.append('Images.Bathroom', state.bathroomImage);
          if (state.outsideImage) formData.append('Images.Outside', state.outsideImage);
          if (state.livingRoomImage) formData.append('Images.LivingRoom', state.livingRoomImage);

          for (const [key, value] of formData.entries()) {
            console.log(`${key}:`, value);
          }

          const res = await axios.post(
            'https://darkteam.runasp.net/SubmitPostEndPoint/SubmitPost',
            formData,
            {
              headers: {
                Authorization: `Bearer ${useAuthStore.getState().token}`,
                Accept: 'application/json',
              },
            }
          );

          if (res.status === 200 && res.data?.success !== false) {
            console.log('✅ Post added successfully:', res.data);
            set({
              Location: 0,
              DescribeLocation: '',
              NumberOfRooms: '',
              Floor: '',
              Capecity: 0,
              Description: '',
              GenderAcceptance: 0,
              DurationType: 0,
              kitchenImage: undefined,
              bathroomImage: undefined,
              outsideImage: undefined,
              livingRoomImage: undefined,
              services: [],
              Rooms: [],
            });
            toast.success("تم  ارسال البوست  بنجاح")
          } else {
            console.warn('⚠️ Server responded with status 200 but error in body:', res.data);
          }
        } catch (error) {
          console.error('❌ Failed to add post:', error);
        }
      },
    }),
    {
      name: 'posts-storage',
      partialize: (state) =>
        Object.fromEntries(
          Object.entries(state).filter(
            ([key]) =>
              ![
                'kitchenImage',
                'bathroomImage',
                'outsideImage',
                'livingRoomImage',
                'Rooms',
              ].includes(key)
          )
        ),
    }
  )
);