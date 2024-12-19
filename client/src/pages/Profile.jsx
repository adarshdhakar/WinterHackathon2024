import React, { useState } from 'react';
import { Button, TextInput } from 'flowbite-react';

const ProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [userDetails, setUserDetails] = useState({
    name: 'John Doe',
    email: 'johndoe@example.com',
    bio: 'A passionate developer and tech enthusiast.',
    address: '123 Main St, Springfield, IL',
    phone: '+1 (555) 123-4567',
    socialLinks: {
      twitter: 'https://twitter.com/johndoe',
      linkedin: 'https://linkedin.com/in/johndoe',
    },
    skills: ['JavaScript', 'React', 'Node.js', 'MongoDB'],
    profileImage: 'https://via.placeholder.com/150',
  });

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSave = () => {
    setIsEditing(false);
    // Add save logic here (e.g., API call to update user details)
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200 dark:bg-gray-900">
      <br/>
      <br/>
      <br/>
      <div className="w-full max-w-3xl bg-white dark:bg-gray-800 shadow-2xl rounded-lg p-8 space-y-6">
        <div className="flex flex-col items-center">
          <div className="relative mb-6">
            <img
              src={userDetails.profileImage}
              alt="Profile"
              className="w-36 h-36 rounded-full border-4 border-blue-500 shadow-lg"
            />
            {isEditing && (
              <label className="absolute bottom-0 right-0 bg-blue-500 p-3 rounded-full cursor-pointer shadow-lg">
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) =>
                    setUserDetails({
                      ...userDetails,
                      profileImage: URL.createObjectURL(e.target.files[0]),
                    })
                  }
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="white"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.232 5.232a3 3 0 114.243 4.243L9 19.95 4.05 20.95l1-4.95L15.232 5.232z"
                  />
                </svg>
              </label>
            )}
          </div>
          <h1 className="text-4xl font-semibold mt-4 text-gray-800 dark:text-white">{userDetails.name}</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">{userDetails.email}</p>
        </div>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
            {isEditing ? (
              <TextInput
                name="name"
                value={userDetails.name}
                onChange={handleInputChange}
                className="w-full p-3 border-2 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-blue-500"
              />
            ) : (
              <p className="text-gray-800 dark:text-gray-300">{userDetails.name}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
            {isEditing ? (
              <TextInput
                name="email"
                value={userDetails.email}
                onChange={handleInputChange}
                className="w-full p-3 border-2 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-blue-500"
              />
            ) : (
              <p className="text-gray-800 dark:text-gray-300">{userDetails.email}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Bio</label>
            {isEditing ? (
              <textarea
                name="bio"
                value={userDetails.bio}
                onChange={handleInputChange}
                className="w-full p-3 border-2 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-blue-500"
              />
            ) : (
              <p className="text-gray-800 dark:text-gray-300">{userDetails.bio}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Address</label>
            {isEditing ? (
              <TextInput
                name="address"
                value={userDetails.address}
                onChange={handleInputChange}
                className="w-full p-3 border-2 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-blue-500"
              />
            ) : (
              <p className="text-gray-800 dark:text-gray-300">{userDetails.address}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Phone Number</label>
            {isEditing ? (
              <TextInput
                name="phone"
                value={userDetails.phone}
                onChange={handleInputChange}
                className="w-full p-3 border-2 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-blue-500"
              />
            ) : (
              <p className="text-gray-800 dark:text-gray-300">{userDetails.phone}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Social Links</label>
            {isEditing ? (
              <>
                <TextInput
                  name="twitter"
                  value={userDetails.socialLinks.twitter}
                  onChange={(e) =>
                    setUserDetails({
                      ...userDetails,
                      socialLinks: {
                        ...userDetails.socialLinks,
                        twitter: e.target.value,
                      },
                    })
                  }
                  className="w-full p-3 border-2 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-blue-500"
                  placeholder="Twitter URL"
                />
                <TextInput
                  name="linkedin"
                  value={userDetails.socialLinks.linkedin}
                  onChange={(e) =>
                    setUserDetails({
                      ...userDetails,
                      socialLinks: {
                        ...userDetails.socialLinks,
                        linkedin: e.target.value,
                      },
                    })
                  }
                  className="w-full p-3 border-2 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-blue-500"
                  placeholder="LinkedIn URL"
                />
              </>
            ) : (
              <div className="text-gray-800 dark:text-gray-300">
                <p>
                  <a href={userDetails.socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                    Twitter
                  </a>
                </p>
                <p>
                  <a href={userDetails.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                    LinkedIn
                  </a>
                </p>
              </div>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Skills</label>
            {isEditing ? (
              <TextInput
                name="skills"
                value={userDetails.skills.join(', ')}
                onChange={(e) =>
                  setUserDetails({
                    ...userDetails,
                    skills: e.target.value.split(',').map((skill) => skill.trim()),
                  })
                }
                className="w-full p-3 border-2 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-blue-500"
                placeholder="Comma-separated skills"
              />
            ) : (
              <p className="text-gray-800 dark:text-gray-300">{userDetails.skills.join(', ')}</p>
            )}
          </div>
        </div>

        <div className="mt-6 flex justify-end space-x-4">
          {isEditing ? (
            <>
              <Button color="gray" onClick={handleEditToggle} className="bg-gray-700 hover:bg-gray-800 text-white">
                Cancel
              </Button>
              <Button gradientDuoTone="purpleToBlue" onClick={handleSave} className="bg-blue-700 hover:bg-blue-800 text-white">
                Save
              </Button>
            </>
          ) : (
            <Button gradientDuoTone="purpleToBlue" onClick={handleEditToggle} className="bg-blue-700 hover:bg-blue-800 text-white">
              Edit Profile
            </Button>
          )}
        </div>
      </div>
      <br/>
      <br/>
      <br/>
    </div>
  );
};

export default ProfilePage;
