/**
 * enchant();
<<<<<<< HEAD
 * enchant.js を使う前に必要な処理。
 * (enchant.js 本体や、読み込んだプラグインの中で定義されている enchant.Foo, enchant.Plugin.Bar などのクラスを、
 *  それぞれグローバルの Foo, Bar にエクスポートする。)
 */
enchant();

/*
 * window.onload
 * ページがロードされた際に実行される関数。
 * すべての処理はページがロードされてから行うため、 window.onload の中で実行する。
 * 特に new Game(); は、<body> タグが存在しないとエラーになるので注意。
=======
 * enchant.js ���g���O�ɕK�v�ȏ����B
 * (enchant.js �{�̂�A�ǂݍ��񂾃v���O�C���̒��Œ�`����Ă��� enchant.Foo, enchant.Plugin.Bar �Ȃǂ̃N���X���A
 *  ���ꂼ��O���[�o���� Foo, Bar �ɃG�N�X�|�[�g����B)
 */
enchant();

var CHARA_IMAGE_NAME = "http://enchantjs.com/assets/images/chara1.gif";
/*
 * window.onload
 * �y�[�W�����[�h���ꂽ�ۂɎ��s�����֐��B
 * ���ׂĂ̏����̓y�[�W�����[�h����Ă���s�����߁A window.onload �̒��Ŏ��s����B
 * ���� new Game(); �́A<body> �^�O�����݂��Ȃ��ƃG���[�ɂȂ�̂Œ��ӁB
>>>>>>> 60682f96dec6c37c557791558b7c12a81ae0facf
 */
window.onload = function(){
    /**
     * new Game(width, height)
<<<<<<< HEAD
     * Game オブジェクトを作成する。
     * 画面の大きさは 320ピクセル x 320ピクセル に設定する。
=======
     * Game �I�u�W�F�N�g���쐬����B
     * ��ʂ̑傫���� 320�s�N�Z�� x 320�s�N�Z�� �ɐݒ肷��B
>>>>>>> 60682f96dec6c37c557791558b7c12a81ae0facf
     */
    var game = new Game(320, 320);

    /**
     * Game.fps
<<<<<<< HEAD
     * ゲームの fps (frame per second) を指定する。
     * この場合、1秒間あたり15回画面が更新される。
     */
    game.fps = 15;
    /**
     * Game#preload
     * 必要なファイルを相対パスで引数に指定する。
     * ファイルはすべて、ゲームが始まる前にロードされる。
     */
    game.preload("chara1.png");
    
    /**
     * Game#onload
     * ロードが完了した直後に実行される関数を指定している。
     * onload プロパティは load イベントのリスナとして働くので、以下の2つの書き方は同じ意味。
=======
     * �Q�[���� fps (frame per second) ���w�肷��B
     * ���̏ꍇ�A1�b�Ԃ�����15���ʂ��X�V�����B
     */
    game.fps = 30;
    /**
     * Game#preload
     * �K�v�ȃt�@�C���𑊑΃p�X�ň����Ɏw�肷��B
     * �t�@�C���͂��ׂāA�Q�[�����n�܂�O�Ƀ��[�h�����B
     */
    game.preload(CHARA_IMAGE_NAME);
    
    /**
     * Game#onload
     * ���[�h��������������Ɏ��s�����֐����w�肵�Ă���B
     * onload �v���p�e�B�� load �C�x���g�̃��X�i�Ƃ��ē����̂ŁA�ȉ���2�̏������͓����Ӗ��B
>>>>>>> 60682f96dec6c37c557791558b7c12a81ae0facf
     *
     * game.onload = function(){
     *     // code
     * }
     *
     * game.addEventListener("load", function(){
     *     // code
     * })
     */
    game.onload = function(){
        /**
         * new Sprite(width, height)
<<<<<<< HEAD
         * スプライトオブジェクトを作成する。
         * Sprite は、Entity, Node, EventTarget を継承しており、それぞれのメソッドやプロパティを使うことができる。
=======
         * �X�v���C�g�I�u�W�F�N�g���쐬����B
         * Sprite �́AEntity, Node, EventTarget ���p�����Ă���A���ꂼ��̃��\�b�h��v���p�e�B���g�����Ƃ��ł���B
>>>>>>> 60682f96dec6c37c557791558b7c12a81ae0facf
         */
        bear = new Sprite(32, 32);

        /**
         * Sprite.image {Object}
<<<<<<< HEAD
         * Game#preload で指定されたファイルは、Game.assets のプロパティとして格納される。
         * Sprite.image にこれを代入することで、画像を表示することができる
         */
        bear.image = game.assets["chara1.png"];

        /**
         * Node.x Node.y {Number}
         * x, y 座標を指定する。
         * viewport の大きさに合わせて画面が拡大縮小されている場合も、
         * オリジナルの座標系で指定できる。
=======
         * Game#preload �Ŏw�肳�ꂽ�t�@�C���́AGame.assets �̃v���p�e�B�Ƃ��Ċi�[�����B
         * Sprite.image �ɂ���������邱�ƂŁA�摜��\�����邱�Ƃ��ł���
         */
        bear.image = game.assets[CHARA_IMAGE_NAME];

        /**
         * Node.x Node.y {Number}
         * x, y ���W���w�肷��B
         * viewport �̑傫���ɍ��킹�ĉ�ʂ��g��k������Ă���ꍇ���A
         * �I���W�i���̍��W�n�Ŏw��ł���B
>>>>>>> 60682f96dec6c37c557791558b7c12a81ae0facf
         */
        bear.x = 0;
        bear.y = 0;

        /**
         * Sprite.frame {Number}
<<<<<<< HEAD
         * (width, height) ピクセルの格子で指定された画像を区切り、
         * 左上から数えて frame 番目の画像を表示することができる。
         * デフォルトでは、0:左上の画像が表示される。
         * このサンプルでは、シロクマが立っている画像を表示する (chara1.gif 参照)。
=======
         * (width, height) �s�N�Z���̊i�q�Ŏw�肳�ꂽ�摜����؂�A
         * ���ォ�琔���� frame �Ԗڂ̉摜��\�����邱�Ƃ��ł���B
         * �f�t�H���g�ł́A0:����̉摜���\�������B
         * ���̃T���v���ł́A�V���N�}�������Ă���摜��\������ (chara1.gif �Q��)�B
>>>>>>> 60682f96dec6c37c557791558b7c12a81ae0facf
         */
        bear.frame = 5;
        /**
         * Group#addChild(node) {Function}
<<<<<<< HEAD
         * オブジェクトをノードツリーに追加するメソッド。
         * ここでは、クマの画像を表示するスプライトオブジェクトを、rootScene に追加している。
         * Game.rootScene は Group を継承した Scene クラスのインスタンスで、描画ツリーのルートになる特別な Scene オブジェクト。
         * この rootScene に描画したいオブジェクトを子として追加する (addChild) ことで、毎フレーム描画されるようになる。
         * 引数には enchant.Node を継承したクラス (Entity, Group, Scene, Label, Sprite..) を指定する。
=======
         * �I�u�W�F�N�g���m�[�h�c���[�ɒǉ����郁�\�b�h�B
         * �����ł́A�N�}�̉摜��\������X�v���C�g�I�u�W�F�N�g���ArootScene �ɒǉ����Ă���B
         * Game.rootScene �� Group ���p������ Scene �N���X�̃C���X�^���X�ŁA�`��c���[�̃��[�g�ɂȂ���ʂ� Scene �I�u�W�F�N�g�B
         * ���� rootScene �ɕ`�悵�����I�u�W�F�N�g���q�Ƃ��Ēǉ����� (addChild) ���ƂŁA���t���[���`�悳���悤�ɂȂ�B
         * �����ɂ� enchant.Node ���p�������N���X (Entity, Group, Scene, Label, Sprite..) ���w�肷��B
>>>>>>> 60682f96dec6c37c557791558b7c12a81ae0facf
         */
        game.rootScene.addChild(bear);

        /**
         * EventTarget#addEventListener(event, listener)
<<<<<<< HEAD
         * イベントに対するリスナを登録する。
         * リスナとして登録された関数は、指定されたイベントの発行時に実行される。
         * よく使うイベントには、以下のようなものがある。
         * - "touchstart" : タッチ/クリックされたとき
         * - "touchmove" : タッチ座標が動いた/ドラッグされたとき
         * - "touchend" : タッチ/クリックが離されたとき
         * - "enterframe" : 新しいフレームが描画される前
         * - "exitframe" : 新しいフレームが描画された後
         * enchant.js やプラグインに組み込まれたイベントは、それぞれのタイミングで自動で発行されるが、
         * EventTarget#dispatchEvent で任意のイベントを発行することもできる。
         *
         * ここでは、右に向かって走っていくアニメーションを表現するために、
         * 新しいフレームが描画される前に、毎回クマの画像を切り替え、x座標を1増やすという処理をリスナとして追加する。
         */
        bear.addEventListener("enterframe", function(){
            /**
             * クマを走らせるために、x座標をインクリメントしている。
             * この無名関数 function(){ ... } は enterframe イベントのリスナなので、毎フレーム実行される。
             */
            this.x += 1;

            /**
             * this.age (Node.age) は、クマのオブジェクトが今までに何回描画されたか
             * クマの画像を変えて走るアニメーションを表現するために、
             * frame を 6 -> 7 -> 6 -> 7.. と順番に変えている。
             */
            this.frame = this.age % 2 + 6;
        });

        /**
         * タッチされると消える処理を実現するために、
         * touchstart イベントが起こったとき、クマが消える処理をリスナとして追加する。
         */
        bear.addEventListener("touchstart", function(){
            /**
             * クマを game.rootScene から削除する。
             * Group#addChild の逆は Group#removeChild。
             */
            game.rootScene.removeChild(bear);
        });
=======
         * �C�x���g�ɑ΂��郊�X�i��o�^����B
         * ���X�i�Ƃ��ēo�^���ꂽ�֐��́A�w�肳�ꂽ�C�x���g�̔��s���Ɏ��s�����B
         * �悭�g���C�x���g�ɂ́A�ȉ��̂悤�Ȃ��̂�����B
         * - "touchstart" : �^�b�`/�N���b�N���ꂽ�Ƃ�
         * - "touchmove" : �^�b�`���W��������/�h���b�O���ꂽ�Ƃ�
         * - "touchend" : �^�b�`/�N���b�N�������ꂽ�Ƃ�
         * - "enterframe" : �V�����t���[�����`�悳���O
         * - "exitframe" : �V�����t���[�����`�悳�ꂽ��
         * enchant.js ��v���O�C���ɑg�ݍ��܂ꂽ�C�x���g�́A���ꂼ��̃^�C�~���O�Ŏ����Ŕ��s����邪�A
         * EventTarget#dispatchEvent �ŔC�ӂ̃C�x���g�𔭍s���邱�Ƃ��ł���B
         *
         */
        bear.addEventListener("enterframe", function(){
        
            // ���������L�[�ɂ���Ĉړ�������
            if (game.input.right) {
                bear.x += 2;
            }
            if (game.input.left) {
                bear.x -= 2;
            }

            if (game.input.up) {
                bear.y -= 2;
            }
            if (game.input.down) {
                bear.y += 2;
            }
            /**
             * this.age (Node.age) �́A�N�}�̃I�u�W�F�N�g�����܂łɉ���`�悳�ꂽ��
             * �N�}�̉摜��ς��đ���A�j���[�V������\�����邽�߂ɁA
             * frame �� 6 -> 7 -> 6 -> 7.. �Ə��Ԃɕς��Ă���B
             */
            this.frame = this.age % 2 + 6;
        });
>>>>>>> 60682f96dec6c37c557791558b7c12a81ae0facf
    };

    /**
     * Game#start
<<<<<<< HEAD
     * ゲームを開始する。この関数を実行するまで、ゲームは待機状態となる。
     * 代わりに Game#debug を使うことで、デバッグモードで起動することができる。
     * Game#pause(); で一時停止し、 Game#resume(); で再開することができる。
=======
     * �Q�[�����J�n����B���̊֐������s����܂ŁA�Q�[���͑ҋ@��ԂƂȂ�B
     * ����� Game#debug ���g�����ƂŁA�f�o�b�O���[�h�ŋN�����邱�Ƃ��ł���B
     * Game#pause(); �ňꎞ��~���A Game#resume(); �ōĊJ���邱�Ƃ��ł���B
>>>>>>> 60682f96dec6c37c557791558b7c12a81ae0facf
     */
    game.start();
};
