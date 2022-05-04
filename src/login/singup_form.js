import Modal from "flowbite/src/components/modal";

const SingupForm = (props) => {
  const showSingupModel = () => {
    const targetEl = document.getElementById("singupModel");
    const singupModel = new Modal(targetEl);
    singupModel.show();
  };

  const hideSingupModel = () => {
    const targetEl = document.getElementById("singupModel");
    const singupModel = new Modal(targetEl);
    singupModel.hide();
    document.querySelector("[modal-backdrop]").remove(); // kill background
  };

  const handleSingup = (e) => {
    e.preventDefault();
    hideSingupModel();
  };

  return (
    <>
      <div class="flex justify-end text-sm font-medium text-gray-500 dark:text-gray-300">
        <button className="btn-primary" type="submit" onClick={showSingupModel}>
          Signup
        </button>
      </div>
      <div
        id="singupModel"
        tabindex="-1"
        aria-hidden="true"
        class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center"
      >
        <div class="relative p-4  h-full sm:h-auto">
          <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div class="flex justify-end p-2">
              <button
                type="button"
                class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-black"
                onClick={hideSingupModel}
              >
                <svg
                  class="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>

            <form className="px-6 grid grid-rows gap-6">
              <div className="grid grid-cols-2 gap-3">
                <div className="mb-2 input-layout">
                  <label for="fName">First Name</label>
                  <input
                    type="text"
                    id="fName"
                    className="form-input"
                    placeholder="Mustafa"
                    required=""
                  />
                </div>
                <div class="mb-2 input-layout">
                  <label for="lName">Last Name</label>
                  <input
                    type="text"
                    id="lName"
                    className="form-input"
                    placeholder="Arinmis"
                    required=""
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div class="mb-2 input-layout">
                  <label for="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="form-input"
                    placeholder="name@flowbite.com"
                    required=""
                  />
                </div>
                <div class="mb-2 input-layout">
                  <label for="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    className="form-input"
                    required=""
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div class="mb-2 input-layout">
                  <label for="phone-number">Phone Number</label>
                  <input
                    type="tel"
                    id="phone-number"
                    className="form-input"
                    placeholder="+90 543 535 95 24"
                    required=""
                  />
                </div>
                <div class="mb-2 input-layout">
                  <label for="ID">ID</label>
                  <input
                    type="text"
                    id="ID"
                    className="form-input"
                    placeholder="Arinmis"
                    required=""
                  />
                </div>
              </div>
              <div className="flex justify-center mb-3">
                <button
                  data-modal-toggle="signupModal"
                  onClick={handleSingup}
                  className="btn-primary"
                >
                  Singup
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default SingupForm;
