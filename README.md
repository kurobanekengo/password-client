# インストール

```
npm install webpack webpack-cli webpack-dev-server typescript ts-loader
```

# トラブルシューティング
Vagrant上で起動しているwebpack-dev-server上のファイルに対しホストから
ソースファイルを編集してもwatchによる差分コンパイルが正常に動作しない。

原因はNFS経由にファイルを更新しても更新イベントがVagrant上のファイルシステム
に正しく伝わらないため。現状はwatchOptionsを指定しpollingにする必要あり。
ただしかなり遅い。

結論: 可能ならばDockerに移行したほうがよい。

# 残課題
- ホットリロードができない


